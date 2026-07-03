import { Button } from "./ui/button";
import { Shield, Clock, Users } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-primary to-secondary py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl mb-6">
            When Crisis Strikes,
            <br />
            <span className="text-accent">We Respond</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Expert crisis communications that protect your reputation, 
            manage stakeholder relationships, and guide you through your most challenging moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Emergency Response
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg mb-2">24/7 Response</h3>
              <p className="text-gray-300">Immediate crisis response team available around the clock</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg mb-2">Reputation Protection</h3>
              <p className="text-gray-300">Strategic messaging to safeguard your brand and credibility</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-3 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg mb-2">Expert Team</h3>
              <p className="text-gray-300">Seasoned professionals with decades of crisis management experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}