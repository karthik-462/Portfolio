import { useScrollReveal } from '@/hooks/useScrollReveal';

const Skills = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  const capabilities = [
    {
      context: 'Languages',
      tools: ['C++', 'Python', 'JavaScript', 'SQL'],
      description: 'Programming languages for various applications',
    },
    {
      context: 'Frontend',
      tools: ['React', 'TailwindCSS', 'Bootstrap', 'HTML5', 'CSS3'],
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
      tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'Canva', 'Overleaf'],
      description: 'Development and productivity tools',
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      
      
      <div className="container px-6 relative">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Header - right aligned for variety */}
          <div 
            className={`mb-16 text-right transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="text-xs font-heading font-black text-primary/80 uppercase tracking-widest block mb-2">WHAT I KNOW</span>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground drop-shadow-[0_0_8px_rgba(176,38,255,0.3)]">
              Technical Interface
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
                <div className="py-5 border-b border-border hover:border-primary/50 hover:bg-card/30 transition-all clip-edges px-4">
                  <div className="grid md:grid-cols-12 gap-4 items-center">
                    {/* Context */}
                    <div className="md:col-span-4">
                      <p className="text-sm font-heading font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
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
            <p className="text-[10px] font-heading font-black uppercase tracking-widest text-muted-foreground/60">
              Also familiar with: Power BI, Figma
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;