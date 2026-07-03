import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Get Immediate Help</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every minute counts in a crisis. Contact us immediately for expert guidance 
            and rapid response crisis communication support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request Crisis Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Organization" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                </div>
                <Input placeholder="Crisis Type/Industry" />
                <Textarea 
                  placeholder="Brief description of your situation (urgent requests call our hotline)" 
                  rows={4}
                />
                <Button className="w-full" size="lg">
                  Submit Request
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  For immediate crisis response, please call our 24/7 hotline
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-destructive text-destructive-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Emergency Hotline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl mb-2">(555) 123-4567</p>
                <p className="text-sm opacity-90">Available 24/7 for crisis situations</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">crisis@crisiscommpro.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-sm text-muted-foreground">
                      123 Crisis Management Plaza<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">
                      Crisis: Immediate<br />
                      General: Within 2 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}