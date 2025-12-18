import { Clock } from 'lucide-react';

const Schedule = () => {
  const schedule = [
    { day: 'Monday', sessions: [{ time: '6:00 AM', activity: 'Morning Run' }, { time: '5:00 PM', activity: 'Strength Training' }] },
    { day: 'Tuesday', sessions: [{ time: '6:00 AM', activity: 'Yoga' }, { time: '5:00 PM', activity: 'HIIT' }] },
    { day: 'Wednesday', sessions: [{ time: '6:00 AM', activity: 'Cardio' }, { time: '5:00 PM', activity: 'CrossFit' }] },
    { day: 'Thursday', sessions: [{ time: '6:00 AM', activity: 'Morning Run' }, { time: '5:00 PM', activity: 'Strength Training' }] },
    { day: 'Friday', sessions: [{ time: '6:00 AM', activity: 'Yoga' }, { time: '5:00 PM', activity: 'HIIT' }] },
    { day: 'Saturday', sessions: [{ time: '7:00 AM', activity: 'CrossFit' }, { time: '10:00 AM', activity: 'Outdoor Activity' }] },
    { day: 'Sunday', sessions: [{ time: '8:00 AM', activity: 'Rest & Recovery' }] },
  ];

  return (
    <section id="schedule" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">WEEKLY SCHEDULE</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            PLAN YOUR <span className="text-gradient">WEEK</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find a session that fits your timetable. All sessions are conducted at the campus gym.
          </p>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {schedule.map((day) => (
            <div
              key={day.day}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="sm:w-32">
                <span className="text-xl font-bold text-primary">{day.day}</span>
              </div>
              <div className="flex-1 flex flex-wrap gap-4">
                {day.sessions.map((session, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-secondary/50 rounded-xl px-4 py-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{session.time}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{session.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
