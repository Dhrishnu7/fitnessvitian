import { Dumbbell, Bike, Heart, Zap, Timer, Mountain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training program.',
      color: 'from-primary to-orange-600',
    },
    {
      icon: Bike,
      title: 'Cardio Blast',
      description: 'High-intensity cardio sessions to boost endurance and burn calories effectively.',
      color: 'from-accent to-yellow-600',
    },
    {
      icon: Heart,
      title: 'Yoga & Flexibility',
      description: 'Improve flexibility, balance, and mental clarity through guided yoga sessions.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Zap,
      title: 'HIIT Workouts',
      description: 'Maximize results with high-intensity interval training in minimum time.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Timer,
      title: 'CrossFit',
      description: 'Functional fitness program combining various disciplines for total body conditioning.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Mountain,
      title: 'Outdoor Activities',
      description: 'Treks, runs, and outdoor fitness challenges to break the monotony.',
      color: 'from-purple-500 to-violet-600',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">OUR PROGRAMS</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            TRAIN <span className="text-gradient">YOUR WAY</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from a variety of programs designed for all fitness levels. 
            Whether you're a beginner or advanced, we have something for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="group bg-background border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
