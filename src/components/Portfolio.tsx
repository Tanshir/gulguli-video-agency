
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Eye, Heart } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Brand Campaign - TechFlow",
      category: "Commercial",
      views: "2.5M",
      engagement: "98%",
      description: "A cinematic brand story that increased conversion by 340%",
      thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=500&h=300&fit=crop",
      duration: "2:30"
    },
    {
      title: "YouTube Series - FitnessFirst",
      category: "Content Series", 
      views: "1.8M",
      engagement: "95%",
      description: "Weekly fitness content that built a community of 500K+ subscribers",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      duration: "8:15"
    },
    {
      title: "Product Launch - EcoStyle",
      category: "Product Demo",
      views: "3.2M",
      engagement: "97%", 
      description: "Sustainable fashion showcase with stunning visual storytelling",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      duration: "1:45"
    },
    {
      title: "Documentary - Ocean Heroes",
      category: "Documentary",
      views: "5.1M",
      engagement: "99%",
      description: "Award-winning environmental documentary with powerful impact",
      thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
      duration: "12:30"
    },
    {
      title: "Social Campaign - Unity Project",
      category: "Social Impact",
      views: "4.3M", 
      engagement: "96%",
      description: "Viral social campaign that sparked global conversation",
      thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop",
      duration: "3:20"
    },
    {
      title: "Event Recap - Innovation Summit",
      category: "Event",
      views: "900K",
      engagement: "94%",
      description: "Dynamic event highlights that captured the energy and insights",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
      duration: "4:10"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped brands and creators tell their stories through 
            compelling video content that drives real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-glass overflow-hidden group hover:card-glow transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Play className="w-4 h-4 mr-2" />
                    Watch
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {project.duration}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-muted-foreground">
                      <Eye className="w-4 h-4 mr-1" />
                      {project.views}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Heart className="w-4 h-4 mr-1" />
                      {project.engagement}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-secondary">
            View Full Portfolio
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
