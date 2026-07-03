import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Team() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Crisis Communications Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face",
      bio: "Former CNN journalist with 20+ years in crisis management. Led communication efforts for major corporate crises.",
      specialties: ["Media Relations", "Corporate Crisis", "Executive Coaching"]
    },
    {
      name: "Michael Rodriguez",
      role: "Digital Crisis Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in social media crisis management and online reputation protection. Former social media director at tech Fortune 500.",
      specialties: ["Social Media", "Online Reputation", "Digital Strategy"]
    },
    {
      name: "Dr. Emily Watson",
      role: "Strategic Communications Advisor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "PhD in Communications with government and nonprofit crisis experience. Specializes in stakeholder psychology.",
      specialties: ["Stakeholder Relations", "Government Affairs", "Crisis Psychology"]
    },
    {
      name: "James Park",
      role: "Media Relations Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Former White House press secretary with extensive experience in high-pressure media environments.",
      specialties: ["Press Relations", "Message Development", "Media Training"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Expert Crisis Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our seasoned professionals bring decades of experience in journalism, 
            public relations, and crisis management to every situation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}