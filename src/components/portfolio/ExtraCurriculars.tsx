import { useScrollReveal } from '@/hooks/useScrollReveal';

const ExtraCurriculars = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const activities = [
    {
      title: 'Livewire Dance Club',
      organization: 'VNR VJIET',
      role: 'Active Member',
      period: '2023 - Present',
      description: 'Active member of Livewire Dance Club; participated in and won 3+ competitions held at NIFT Hyderabad and CBIT Hyderabad, and mentored new members.',
    },
    {
      title: 'Hyderabad Runners Marathon',
      organization: 'Hyderabad Runners',
      role: 'Participant',
      period: '2023 - 2024',
      description: 'Completed Hyderabad Runners Marathons in 2023 and 2024, demonstrating discipline, consistency, and endurance.',
    },
  ];

  return (
    <section id="extra-curriculars" className="py-32 relative">
      {/* Section marker */}
      <div className="absolute right-8 md:right-16 top-32 text-xs font-heading font-bold tracking-[0.3em] uppercase text-muted-foreground/50 hidden lg:block"
           style={{ writingMode: 'vertical-rl' }}>
        EXTRA CURRICULARS
      </div>

      <div className="container px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center text-foreground drop-shadow-[0_0_8px_rgba(176,38,255,0.3)] uppercase tracking-widest">
            Extra Curriculars
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-black border border-border clip-edges p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/30 hover:purple-glow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground tracking-wide group-hover:text-primary transition-colors">{activity.title}</h3>
                    <p className="text-muted-foreground pt-1">{activity.organization}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-xs font-heading font-black tracking-widest uppercase text-primary drop-shadow-[0_0_5px_rgba(176,38,255,0.8)]">{activity.role}</p>
                    <p className="text-[10px] font-heading font-black tracking-widest uppercase text-muted-foreground border border-primary/20 px-2 py-1 mt-2 inline-block clip-edges bg-primary/5">{activity.period}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurriculars;