import { useState } from "react";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PredictionForm, FormData } from "./components/PredictionForm";
import { ResultsDisplay } from "./components/ResultsDisplay";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";

interface Prediction {
  id: string;
  name: string;
  airline: string;
  prediction: "satisfied" | "neutral" | "dissatisfied";
  confidence: number;
  timestamp: string;
}

export default function App() {
  const [currentResult, setCurrentResult] = useState<{
    prediction: "satisfied" | "neutral" | "dissatisfied";
    confidence: number;
    name: string;
  } | null>(null);

  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [apiKey, setApiKey] = useState<string>("");

  const handlePrediction = async (formData: FormData) => {
    // Call backend prediction API
    try {
      const payload = {
        name: formData.name,
        age: parseInt(formData.age || "0"),
        gender: formData.gender,
        airline: formData.airline,
        flight_distance: parseInt(formData.flightDistance || "0"),
        travel_class: formData.travelClass,
        inflight_wifi: parseInt(formData.inflightWifi || "0"),
        online_booking: parseInt(formData.onlineBooking || "0"),
        seat_comfort: parseInt(formData.seatComfort || "0"),
        inflight_entertainment: parseInt(formData.inflightEntertainment || "0"),
        onboard_service: parseInt(formData.onboardService || "0"),
        leg_room_service: parseInt(formData.legRoomService || "0"),
        baggage_handling: parseInt(formData.baggageHandling || "0"),
        checkin_service: parseInt(formData.checkinService || "0"),
        inflight_service: parseInt(formData.inflightService || "0"),
        cleanliness: parseInt(formData.cleanliness || "0"),
      };

      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Prediction API error: ${res.status} ${res.statusText}`);
      }

      const data: { prediction: "satisfied" | "neutral" | "dissatisfied"; confidence: number } = await res.json();

      const result = { prediction: data.prediction, confidence: data.confidence, name: formData.name };

      const predictionRecord: Prediction = {
        id: Date.now().toString(),
        name: formData.name,
        airline: formData.airline,
        prediction: data.prediction,
        confidence: data.confidence,
        timestamp: new Date().toLocaleTimeString(),
      };

      setCurrentResult(result);
      setPredictions((prev) => [...prev, predictionRecord]);

      // Persist prediction to backend storage
      try {
        await fetch("http://localhost:5000/predictions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(predictionRecord),
        });
      } catch (e) {
        console.warn('Failed to persist prediction', e);
      }

      setTimeout(() => {
        document.querySelector("#results")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (err) {
      console.error("Prediction failed", err);
      // Fallback: show an error-like neutral result
      const result = { prediction: "neutral" as const, confidence: 50, name: formData.name };
      setCurrentResult(result);
    }
  };

  // Load persisted predictions on mount
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:5000/predictions');
        if (res.ok) {
          const data: Prediction[] = await res.json();
          setPredictions(data);
        }
      } catch (e) {
        console.warn('Failed to load persisted predictions', e);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PredictionForm onSubmit={handlePrediction} />
      <div id="results">
        <ResultsDisplay result={currentResult} />
      </div>
      <Dashboard predictions={predictions} />
      <Footer />
    </div>
  );
}
