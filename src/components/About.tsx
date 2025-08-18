
import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Zap } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "15+",
      label: "Expert Editors",
      description: "Creative professionals with industry experience"
    },
    {
      icon: Award,
      number: "25+",
      label: "Awards Won", 
      description: "Recognition for excellence in video production"
    },
    {
      icon: Clock,
      number: "48hr",
      label: "Average Turnaround",
      description: "Fast delivery without compromising quality"
    },
    {
      icon: Zap,
      number: "500+",
      label: "Projects Completed",
      description: "Successful campaigns across all industries"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-gradient mb-6">Why Choose VideoVibe?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're not just another video editing service. We're storytellers, brand builders, 
                and growth partners who understand that great content drives real business results.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Lightning Fast Delivery</h3>
                  <p className="text-muted-foreground">
                    Our streamlined process ensures your content is ready when you need it, 
                    without sacrificing quality or attention to detail.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Award-Winning Quality</h3>
                  <p className="text-muted-foreground">
                    Our team has won multiple industry awards for creativity and technical excellence, 
                    bringing that expertise to every project.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Work directly with experienced editors who understand your brand and 
                    vision, providing personalized service every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="card-glass p-6 text-center hover:card-glow transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
