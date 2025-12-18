import { Target, Users, Trophy, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Personalized fitness plans tailored to your academic schedule and fitness goals.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Train alongside motivated peers and build lasting connections.',
    },
    {
      icon: Trophy,
      title: 'Competition Ready',
      description: 'Participate in inter-college sports and fitness competitions.',
    },
    {
      icon: Heart,
      title: 'Holistic Health',
      description: 'Focus on mental wellness, nutrition guidance, and physical fitness.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">ABOUT US</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            MORE THAN JUST A <span className="text-gradient">GYM</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            VIT Fitness Club is dedicated to fostering a culture of health and wellness 
            among students. We believe fitness is the foundation of academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
