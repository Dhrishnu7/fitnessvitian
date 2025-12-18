import { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['About', 'Programs', 'Schedule', 'Team', 'Gallery', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold tracking-wider">VIT FITNESS</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
            <Button className="glow-primary">Join Now</Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <Button className="w-full mt-4 glow-primary">Join Now</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
