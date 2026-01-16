import { useScrollReveal } from '@/hooks/useScrollReveal';

const Skills = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  const capabilities = [
    {
      context: 'Languages',
      tools: ['C', 'C++', 'Python', 'JavaScript'],
      description: 'Programming languages for various applications',
    },
    {
      context: 'Frontend',
      tools: ['React', 'TailwindCSS'],
      description: 'Building responsive user interfaces',
    },
    {
      context: 'Backend',
      tools: ['Node.js', 'Express.js'],
      description: 'Server-side development and APIs',
    },
    {
      context: 'Databases',
      tools: ['MongoDB', 'MySQL', 'OracleSQL'],
      description: 'Data storage and management',
    },
    {
      context: 'Tools & Platforms',
      tools: ['Git', 'GitHub', 'VS Code', 'Power BI', 'Docker', 'Canva', 'Overleaf'],
      description: 'Development and productivity tools',
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />
      
      <div className="container px-6 relative">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Header - right aligned for variety */}
          <div 
            className={`mb-16 text-right transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="text-xs font-mono text-primary/60 block mb-2">capabilities</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Technical Skills
            </h2>
          </div>

          {/* Skills - horizontal flow, context-based */}
          <div className="space-y-1">
            {capabilities.map((cap, index) => (
              <div
                key={cap.context}
                className={`group transition-all duration-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="py-5 border-b border-border/50 hover:border-primary/30 transition-colors">
                  <div className="grid md:grid-cols-12 gap-4 items-center">
                    {/* Context */}
                    <div className="md:col-span-4">
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {cap.context}
                      </p>
                    </div>
                    
                    {/* Tools - inline flow */}
                    <div className="md:col-span-5">
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {cap.tools.map((tool, i) => (
                          <span key={tool} className="text-foreground font-medium text-sm">
                            {tool}
                            {i < cap.tools.length - 1 && (
                              <span className="text-primary/40 ml-4">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Description - appears on hover */}
                    <div className="md:col-span-3 hidden md:block">
                      <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity text-right">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional tools - minimal */}
          <div 
            className={`mt-12 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xs font-mono text-muted-foreground/60">
              Also familiar with: Power BI, Figma, Postman, Linux CLI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;