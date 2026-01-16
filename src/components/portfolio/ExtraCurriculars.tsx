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
      title: 'XPLOR (AR/VR Club)',
      organization: 'VNR VJIET',
      role: 'Core Participant',
      period: '2023 - Present',
      description: 'Core participant of XPLOR (AR/VR Club), contributing to hands-on projects, workshops, and brainstorming sessions on immersive technologies.',
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
      <div className="absolute right-8 md:right-16 top-32 text-xs font-mono text-muted-foreground/50 writing-mode-vertical hidden lg:block"
           style={{ writingMode: 'vertical-rl' }}>
        extra curriculars
      </div>

      <div className="container px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Extra Curriculars
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{activity.title}</h3>
                    <p className="text-muted-foreground">{activity.organization}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-sm font-medium text-foreground">{activity.role}</p>
                    <p className="text-sm text-muted-foreground font-mono">{activity.period}</p>
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