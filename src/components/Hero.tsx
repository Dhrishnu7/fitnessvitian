import { ArrowRight, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
          <Flame className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">VIT Chennai's Premier Fitness Club</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none">
          <span className="text-foreground">TRANSFORM</span>
          <br />
          <span className="text-gradient">YOUR LIMITS</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Join the most active fitness community at VIT Chennai. Build strength, endurance, 
          and lifelong habits with expert guidance and motivated peers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 glow-primary group">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-muted-foreground/30 hover:border-primary">
            View Schedule
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          {[
            { number: '500+', label: 'Active Members' },
            { number: '20+', label: 'Weekly Classes' },
            { number: '5+', label: 'Years Strong' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
