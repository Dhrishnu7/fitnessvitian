import { Dumbbell, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold tracking-wider">VIT FITNESS</span>
          </a>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 VIT Fitness Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
