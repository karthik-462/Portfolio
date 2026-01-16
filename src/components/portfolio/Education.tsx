import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Education = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const education = [
    {
      degree: 'B.Tech, Computer Science',
      institution: 'VNR Vignana Jyothi Institute of Engineering and Technology',
      year: '2023 – 2027',
      details: 'Currently pursuing B.Tech in Computer Science with a CGPA of 8.43.',
    },
    {
      degree: 'Intermediate',
      institution: 'Excellencia Junior College',
      year: '2021 – 2023',
      details: 'Completed intermediate education with 96.1% marks.',
    },
    {
      degree: 'CBSE',
      institution: 'Silver Oaks International School',
      year: '2021',
      details: 'Completed CBSE with 85.6% marks.',
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-32 relative">
      {/* Section marker */}
      <div className="absolute right-8 md:right-16 top-32 text-xs font-mono text-muted-foreground/50 writing-mode-vertical hidden lg:block"
           style={{ writingMode: 'vertical-rl' }}>
        education
      </div>

      <div className="container px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Education
          </h2>

          {/* Timeline Container */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line on the left */}
            <div className="absolute left-8 w-1 bg-gradient-to-b from-primary via-primary/80 to-primary/60 h-full rounded-full hidden md:block shadow-lg"></div>

            <div className="space-y-20">
              {education.map((item, index) => {
                const isExpanded = expandedIndex === index;

                return (
                  <div key={index} className="relative">
                    {/* Timeline Dot on the left */}
                    <div className="absolute left-6 transform -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                      <div className={`w-6 h-6 rounded-full border-4 border-background shadow-lg transition-all duration-300 ${
                        isExpanded ? 'bg-primary scale-110' : 'bg-muted-foreground/20'
                      }`}></div>
                      {isExpanded && (
                        <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-ping"></div>
                      )}
                    </div>

                    {/* Content Container - All aligned to left */}
                    <div className="flex flex-col md:flex-row items-start">
                      {/* Spacer for timeline */}
                      <div className="hidden md:block w-16"></div>

                      {/* Content Card - Always on the left */}
                      <div className="w-full md:flex-1 md:pl-8">
                        <div
                          className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl transition-all duration-500 cursor-pointer hover:shadow-2xl hover:border-primary/30 hover:bg-card group ${
                            isExpanded ? 'shadow-2xl border-primary/50 bg-card scale-[1.02]' : 'hover:scale-[1.01]'
                          }`}
                          onClick={() => toggleExpand(index)}
                        >
                          {/* Header - Always Visible */}
                          <div className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                  {item.degree}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {item.institution}
                                </p>
                              </div>
                              {/* Subtle expand indicator */}
                              <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                              </div>
                            </div>
                          </div>

                          {/* Expandable Content */}
                          <div
                            className={`overflow-hidden transition-all duration-700 ease-out ${
                              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="px-6 pb-6 border-t border-border/30">
                              <div className="flex items-center gap-3 mb-4 mt-4">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                  {item.year}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.details}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;