import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, Users, Globe, Award, Clock, Target } from "lucide-react";

export function About() {
  const stats = [
    { number: "500+", label: "Crisis Situations Managed" },
    { number: "15+", label: "Years of Experience" },
    { number: "24/7", label: "Emergency Response" },
    { number: "98%", label: "Client Satisfaction Rate" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We maintain the highest ethical standards and complete confidentiality in every crisis situation."
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Every minute matters in a crisis. Our team is equipped to respond immediately, any time of day."
    },
    {
      icon: Target,
      title: "Strategic Precision",
      description: "Data-driven strategies tailored to your specific situation, stakeholders, and industry dynamics."
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, providing guidance while empowering your leadership."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Who We Are Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">Who We Are</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CrisisComm Pro is a specialized crisis communications consultancy founded by former journalists, 
            corporate executives, and government communication professionals who understand that reputation 
            is your most valuable asset.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary text-white rounded-lg p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To protect and preserve organizational reputations during their most vulnerable moments through 
              strategic, ethical, and effective crisis communication. We believe that how you respond in a crisis 
              defines who you are as an organization, and we're here to ensure that response reflects your values 
              and protects your future.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2009 during the height of the financial crisis, CrisisComm Pro was born from the 
                recognition that traditional PR agencies often lacked the specialized expertise needed for 
                high-stakes crisis situations. Our founders, having navigated major corporate scandals, 
                natural disasters, and regulatory investigations, saw the need for a dedicated crisis-only practice.
              </p>
              <p>
                Since then, we've grown from a small team of crisis veterans to a comprehensive consultancy 
                that has guided Fortune 500 companies, government agencies, nonprofits, and emerging businesses 
                through over 500 crisis situations across every major industry and crisis type.
              </p>
              <p>
                What sets us apart is our exclusive focus on crisis communications. We don't handle routine PR – 
                we only work when stakes are highest and reputations are on the line. This specialization allows 
                us to maintain the expertise, resources, and rapid-response capabilities that crisis situations demand.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Crisis Types</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Corporate Scandals & Misconduct</li>
                  <li>• Data Breaches & Cybersecurity</li>
                  <li>• Product Recalls & Safety Issues</li>
                  <li>• Executive Departures</li>
                  <li>• Regulatory Investigations</li>
                  <li>• Natural Disasters & Emergencies</li>
                  <li>• Workplace Incidents</li>
                  <li>• Social Media Crises</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Industries</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Financial Services</li>
                  <li>• Technology & Software</li>
                  <li>• Healthcare & Pharmaceuticals</li>
                  <li>• Energy & Utilities</li>
                  <li>• Government & Public Sector</li>
                  <li>• Retail & Consumer Goods</li>
                  <li>• Manufacturing</li>
                  <li>• Non-Profit Organizations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Stakeholders</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Employees & Leadership</li>
                  <li>• Customers & Clients</li>
                  <li>• Investors & Shareholders</li>
                  <li>• Media & Journalists</li>
                  <li>• Regulatory Bodies</li>
                  <li>• Community Members</li>
                  <li>• Business Partners</li>
                  <li>• Industry Associations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications and Credentials */}
        <div className="text-center">
          <h3 className="text-2xl mb-6">Credentials & Recognition</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="secondary" className="px-4 py-2">PRSA Accredited</Badge>
            <Badge variant="secondary" className="px-4 py-2">Crisis Management Certified</Badge>
            <Badge variant="secondary" className="px-4 py-2">IABC Gold Quill Winner</Badge>
            <Badge variant="secondary" className="px-4 py-2">Fortune 500 Experience</Badge>
            <Badge variant="secondary" className="px-4 py-2">Government Clearance</Badge>
            <Badge variant="secondary" className="px-4 py-2">International Response</Badge>
            <Badge variant="secondary" className="px-4 py-2">24/7 Operations</Badge>
            <Badge variant="secondary" className="px-4 py-2">Multi-Language Support</Badge>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team holds advanced degrees in communications, journalism, psychology, and business, 
            combined with professional certifications in crisis management and public relations. 
            We maintain active security clearances and operate under strict confidentiality protocols.
          </p>
        </div>
      </div>
    </section>
  );
}