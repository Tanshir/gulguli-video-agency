
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  Palette, 
  Scissors, 
  Wand2, 
  Music, 
  Layers,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional cuts, transitions, and storytelling that keeps your audience engaged from start to finish.",
      features: ["Multi-camera editing", "Advanced transitions", "Pacing optimization", "Story structure"],
      price: "From $299",
      popular: false
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Cinematic color correction and grading that sets the perfect mood and atmosphere for your content.",
      features: ["Color correction", "Cinematic LUTs", "Mood enhancement", "Brand consistency"],
      price: "From $199",
      popular: true
    },
    {
      icon: Wand2,
      title: "Motion Graphics",
      description: "Eye-catching animations, titles, and visual effects that make your videos stand out.",
      features: ["Custom animations", "Logo animations", "Lower thirds", "Visual effects"],
      price: "From $399",
      popular: false
    },
    {
      icon: Music,
      title: "Audio Production",
      description: "Crystal-clear audio mixing, sound design, and music integration for professional results.",
      features: ["Audio cleanup", "Music integration", "Sound effects", "Voice enhancement"],
      price: "From $149",
      popular: false
    },
    {
      icon: Layers,
      title: "Thumbnail Design",
      description: "Scroll-stopping thumbnails designed to maximize click-through rates and engagement.",
      features: ["A/B testing", "Brand alignment", "High CTR focus", "Multiple variants"],
      price: "From $99",
      popular: false
    },
    {
      icon: Scissors,
      title: "Short Form Content",
      description: "TikTok, Reels, and Shorts optimized for maximum viral potential and engagement.",
      features: ["Platform optimization", "Trend integration", "Hook creation", "Viral elements"],
      price: "From $199",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive video production services 
            tailored to your unique needs and brand vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`card-glass p-6 hover:card-glow transition-all duration-300 group relative ${
                  service.popular ? 'ring-2 ring-primary/30' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-gradient px-4 py-1 rounded-full text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-gradient">{service.price}</span>
                  <Button variant="outline" size="sm" className="group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-hero">
            Get Custom Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
