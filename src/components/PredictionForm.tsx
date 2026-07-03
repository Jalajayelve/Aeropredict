import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Plane } from "lucide-react";

interface PredictionFormProps {
  onSubmit: (data: FormData) => void;
}

export interface FormData {
  name: string;
  age: string;
  gender: string;
  airline: string;
  flightDistance: string;
  travelClass: string;
  inflightWifi: string;
  onlineBooking: string;
  seatComfort: string;
  inflightEntertainment: string;
  onboardService: string;
  legRoomService: string;
  baggageHandling: string;
  checkinService: string;
  inflightService: string;
  cleanliness: string;
}

export function PredictionForm({ onSubmit }: PredictionFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    gender: "",
    airline: "",
    flightDistance: "",
    travelClass: "",
    inflightWifi: "",
    onlineBooking: "",
    seatComfort: "",
    inflightEntertainment: "",
    onboardService: "",
    legRoomService: "",
    baggageHandling: "",
    checkinService: "",
    inflightService: "",
    cleanliness: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="predict" className="py-20 px-4 bg-gradient-to-b from-white to-[#f5f7f5]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold text-[#1f2d1f]">
            Airline Passenger Satisfaction
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#3a4a3a] font-medium">
            Enter passenger and flight details to predict satisfaction level
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl bg-white border-2 border-[#6b8e6b]/20 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#1f2d1f] text-base font-bold">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-[#1f2d1f] text-base font-bold">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="35"
                  value={formData.age}
                  onChange={(e) => updateField("age", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender" className="text-[#1f2d1f] text-base font-bold">Gender</Label>
                <Select value={formData.gender} onValueChange={(value) => updateField("gender", value)} required>
                  <SelectTrigger className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] h-11 text-base font-medium">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-[#6b8e6b]/30">
                    <SelectItem value="male" className="text-[#1f2d1f] text-base font-medium">Male</SelectItem>
                    <SelectItem value="female" className="text-[#1f2d1f] text-base font-medium">Female</SelectItem>
                    <SelectItem value="other" className="text-[#1f2d1f] text-base font-medium">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Flight Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="airline" className="text-[#1f2d1f] text-base font-bold">Airline</Label>
                <Select value={formData.airline} onValueChange={(value) => updateField("airline", value)} required>
                  <SelectTrigger className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] h-11 text-base font-medium">
                    <SelectValue placeholder="Select airline" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-[#6b8e6b]/30">
                    <SelectItem value="emirates" className="text-[#1f2d1f] text-base font-medium">Emirates</SelectItem>
                    <SelectItem value="qatar" className="text-[#1f2d1f] text-base font-medium">Qatar Airways</SelectItem>
                    <SelectItem value="lufthansa" className="text-[#1f2d1f] text-base font-medium">Lufthansa</SelectItem>
                    <SelectItem value="delta" className="text-[#1f2d1f] text-base font-medium">Delta</SelectItem>
                    <SelectItem value="singapore" className="text-[#1f2d1f] text-base font-medium">Singapore Airlines</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="flightDistance" className="text-[#1f2d1f] text-base font-bold">Flight Distance (km)</Label>
                <Input
                  id="flightDistance"
                  type="number"
                  placeholder="5000"
                  value={formData.flightDistance}
                  onChange={(e) => updateField("flightDistance", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="travelClass" className="text-[#1f2d1f] text-base font-bold">Travel Class</Label>
                <Select value={formData.travelClass} onValueChange={(value) => updateField("travelClass", value)} required>
                  <SelectTrigger className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] h-11 text-base font-medium">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-[#6b8e6b]/30">
                    <SelectItem value="economy" className="text-[#1f2d1f] text-base font-medium">Economy</SelectItem>
                    <SelectItem value="premium-economy" className="text-[#1f2d1f] text-base font-medium">Premium Economy</SelectItem>
                    <SelectItem value="business" className="text-[#1f2d1f] text-base font-medium">Business</SelectItem>
                    <SelectItem value="first" className="text-[#1f2d1f] text-base font-medium">First Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Service Ratings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="inflightWifi" className="text-[#1f2d1f] text-base font-bold">Inflight Wifi:</Label>
                <Input
                  id="inflightWifi"
                  type="number"
                  min="0"
                  max="5"
                  placeholder="0-5"
                  value={formData.inflightWifi}
                  onChange={(e) => updateField("inflightWifi", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="onlineBooking" className="text-[#1f2d1f] text-base font-bold">Online Booking:</Label>
                <Input
                  id="onlineBooking"
                  type="number"
                  min="0"
                  max="5"
                  placeholder="0-5"
                  value={formData.onlineBooking}
                  onChange={(e) => updateField("onlineBooking", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="seatComfort" className="text-[#1f2d1f] text-base font-bold">Seat Comfort:</Label>
                <Input
                  id="seatComfort"
                  type="number"
                  min="0"
                  max="5"
                  placeholder="0-5"
                  value={formData.seatComfort}
                  onChange={(e) => updateField("seatComfort", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="inflightEntertainment" className="text-[#1f2d1f] text-base font-bold">Inflight Entertainment:</Label>
                <Input
                  id="inflightEntertainment"
                  type="number"
                  min="0"
                  max="5"
                  placeholder="0-5"
                  value={formData.inflightEntertainment}
                  onChange={(e) => updateField("inflightEntertainment", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="onboardService" className="text-[#1f2d1f] text-base font-bold">On-board Service:</Label>
                <Input
                  id="onboardService"
                  type="number"
                  min="0"
                  max="5"
                  placeholder="0-5"
                  value={formData.onboardService}
                  onChange={(e) => updateField("onboardService", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="legRoomService" className="text-[#1f2d1f] text-base font-bold">Leg Room Service:</Label>
                <Input
                  id="legRoomService"
                  type="number"
                  min="0"
                  max="5"
                  placeholder="0-5"
                  value={formData.legRoomService}
                  onChange={(e) => updateField("legRoomService", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="baggageHandling" className="text-[#1f2d1f] text-base font-bold">Baggage Handling:</Label>
                <Input
                  id="baggageHandling"
                  type="number"
                  min="0"
                  max="5"
                  placeholder="0-5"
                  value={formData.baggageHandling}
                  onChange={(e) => updateField("baggageHandling", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkinService" className="text-[#1f2d1f] text-base font-bold">Check-in Service:</Label>
                <Input
                  id="checkinService"
                  type="number"
                  min="0"
                  max="5"
                  placeholder="0-5"
                  value={formData.checkinService}
                  onChange={(e) => updateField("checkinService", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="inflightService" className="text-[#1f2d1f] text-base font-bold">Inflight Service:</Label>
                <Input
                  id="inflightService"
                  type="number"
                  min="0"
                  max="5"
                  placeholder="0-5"
                  value={formData.inflightService}
                  onChange={(e) => updateField("inflightService", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cleanliness" className="text-[#1f2d1f] text-base font-bold">Cleanliness:</Label>
                <Input
                  id="cleanliness"
                  type="number"
                  min="0"
                  max="5"
                  placeholder="0-5"
                  value={formData.cleanliness}
                  onChange={(e) => updateField("cleanliness", e.target.value)}
                  required
                  className="bg-[#f5f7f5] border-2 border-[#6b8e6b]/30 text-[#1f2d1f] placeholder:text-[#5a6a5a] h-11 text-base font-medium focus:border-[#6b8e6b] focus:ring-[#6b8e6b]"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6b8e6b] to-[#5a7a5a] hover:from-[#5a7a5a] hover:to-[#4a6a4a] text-white shadow-lg h-12 text-base font-bold"
            >
              <Plane className="w-5 h-5 mr-2" />
              Predict Satisfaction
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
