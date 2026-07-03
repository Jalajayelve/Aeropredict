import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { AlertTriangle, MessageSquare, Users, FileText, Megaphone, BarChart3 } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: AlertTriangle,
      title: "Crisis Response Planning",
      description: "Comprehensive crisis communication strategies tailored to your organization's unique risks and stakeholder landscape."
    },
    {
      icon: MessageSquare,
      title: "Media Relations",
      description: "Expert media handling, press releases, and journalist relations to control the narrative during crisis situations."
    },
    {
      icon: Users,
      title: "Stakeholder Communication",
      description: "Targeted messaging for employees, customers, investors, and community members to maintain trust and transparency."
    },
    {
      icon: FileText,
      title: "Content Development",
      description: "Rapid creation of statements, FAQs, talking points, and other communications materials under tight deadlines."
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      description: "Real-time social media monitoring, response, and reputation management across all digital platforms."
    },
    {
      icon: BarChart3,
      title: "Crisis Analytics",
      description: "Data-driven insights and sentiment analysis to measure impact and guide communication strategy adjustments."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Crisis Communication Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive crisis communication solutions designed to protect your reputation 
            and maintain stakeholder confidence during challenging times.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}