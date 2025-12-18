import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">GET IN TOUCH</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            JOIN THE <span className="text-gradient">MOVEMENT</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your fitness journey? Reach out to us or drop by the gym!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Location</h3>
                <p className="text-muted-foreground">
                  VIT Chennai Campus Gym<br />
                  Vandalur-Kelambakkam Road,<br />
                  Chennai - 600127
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Email</h3>
                <p className="text-muted-foreground">fitnessclub@vit.ac.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Phone</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-background border-border" />
              <Input placeholder="Your Email" type="email" className="bg-background border-border" />
            </div>
            <Input placeholder="Subject" className="bg-background border-border" />
            <Textarea placeholder="Your Message" rows={5} className="bg-background border-border resize-none" />
            <Button className="w-full glow-primary group">
              Send Message
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
