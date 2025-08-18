
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">Let's Create Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to elevate your content? Get in touch and let's discuss how we can 
            bring your vision to life with professional video editing services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="card-glass p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-primary-gradient rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground text-sm">hello@videovibe.agency</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Send us your project details and we'll get back within 2 hours.
              </p>
            </Card>

            <Card className="card-glass p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Available Monday to Friday, 9 AM - 6 PM EST.
              </p>
            </Card>

            <Card className="card-glass p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">Los Angeles, CA</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Book a meeting at our creative studio in the heart of LA.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-glass p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input placeholder="Your full name" className="bg-muted/20 border-white/10" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-muted/20 border-white/10" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <Select>
                      <SelectTrigger className="bg-muted/20 border-white/10">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial Video</SelectItem>
                        <SelectItem value="social">Social Media Content</SelectItem>
                        <SelectItem value="youtube">YouTube Channel</SelectItem>
                        <SelectItem value="documentary">Documentary</SelectItem>
                        <SelectItem value="event">Event Coverage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <Select>
                      <SelectTrigger className="bg-muted/20 border-white/10">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1k">Under $1,000</SelectItem>
                        <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-plus">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <Textarea 
                    placeholder="Tell us about your project, timeline, and specific requirements..." 
                    className="bg-muted/20 border-white/10 min-h-[120px]" 
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-hero flex-1 group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="flex-1 group">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
