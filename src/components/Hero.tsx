
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Zap, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card-gradient border border-white/10 mb-8">
            <Award className="w-4 h-4 mr-2 text-accent" />
            <span className="text-sm text-muted-foreground">Trusted by 500+ Content Creators</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 leading-tight">
            Transform Your Content Into
            <br />
            <span className="text-glow">Cinematic Masterpieces</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional video editing services that captivate audiences and elevate your brand. 
            From raw footage to viral content, we craft stories that matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="btn-hero group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-secondary group">
              <Zap className="w-5 h-5 mr-2" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24hr</div>
              <div className="text-sm text-muted-foreground">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
