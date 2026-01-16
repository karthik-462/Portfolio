import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Languages = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const languages = [
    {
      language: 'Telugu',
      proficiency: 'Native / Full Professional',
      level: 95, // Not 100% as requested
    },
    {
      language: 'English',
      proficiency: 'Fluent / Full Professional',
      level: 90, // Not 100% as requested
    },
    {
      language: 'Hindi',
      proficiency: 'Professional Working',
      level: 75,
    },
    {
      language: 'Spanish',
      proficiency: 'Basic',
      level: 30,
    },
  ];

  return (
    <section id="languages" className="py-32 relative">
      {/* Section marker */}
      <div className="absolute right-8 md:right-16 top-32 text-xs font-mono text-muted-foreground/50 writing-mode-vertical hidden lg:block"
           style={{ writingMode: 'vertical-rl' }}>
        languages
      </div>

      <div className="container px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Languages
          </h2>

          <div className="max-w-2xl mx-auto space-y-8">
            {languages.map((lang, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex justify-between items-center py-4 border-b border-border/50">
                    <span className={`text-lg font-medium transition-colors ${
                      isHovered ? 'text-primary' : 'text-foreground'
                    }`}>
                      {lang.language}
                    </span>
                    <span className="text-sm text-muted-foreground font-mono">{lang.proficiency}</span>
                  </div>

                  {/* Progress bar that appears on hover */}
                  <div className={`mt-3 transition-all duration-500 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      {/* Background track */}
                      <div className="absolute inset-0 bg-muted-foreground/20 rounded-full"></div>

                      {/* Progress fill */}
                      <div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isHovered ? `${lang.level}%` : '0%'
                        }}
                      ></div>

                      {/* Animated segments for visual appeal */}
                      <div className="absolute inset-0 flex">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div
                            key={i}
                            className={`flex-1 border-r border-background/20 transition-all duration-300 ${
                              isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                              transitionDelay: isHovered ? `${i * 50}ms` : '0ms'
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;