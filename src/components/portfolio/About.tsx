import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const blocks = [
    {
      label: '01',
      content: 'Aspiring software engineer pursuing B.Tech in Computer Science with hands-on experience in building, testing, and deploying full-stack web applications.',
    },
    {
      label: '02', 
      content: 'Actively seeking opportunities to contribute to production-level software systems while strengthening system design and problem-solving skills.',
    },
    {
      label: '03',
      content: 'I’m focused on strengthening fundamentals by building projects and learning how real-world applications are designed.',
    },
    {
      label: '04',
      content: 'Currently exploring system design patterns, scalability, and contributing to projects that solve real problems.',
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      {/* Section marker */}
      <div className="absolute right-8 md:right-16 top-32 text-xs font-mono text-muted-foreground/50 writing-mode-vertical hidden lg:block" 
           style={{ writingMode: 'vertical-rl' }}>
        about
      </div>
      
      <div className="container px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Header - left aligned, minimal */}
          <div 
            className={`mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Profile Summary
            </h2>
          </div>

          {/* Content blocks - staggered, asymmetric */}
          <div className="space-y-12 md:space-y-16">
            {blocks.map((block, index) => (
              <div
                key={block.label}
                className={`grid md:grid-cols-12 gap-4 md:gap-8 items-start transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${(index + 1) * 150}ms`,
                  marginLeft: index % 2 === 1 ? '0' : undefined,
                }}
              >
                {/* Number - offset based on index */}
                <div 
                  className={`md:col-span-2 ${
                    index % 2 === 1 ? 'md:col-start-2' : 'md:col-start-1'
                  }`}
                >
                  <span className="text-xs font-mono text-primary/60">{block.label}</span>
                </div>
                
                {/* Content - varying widths */}
                <div 
                  className={`md:col-span-8 ${
                    index % 2 === 1 ? 'md:col-start-4' : 'md:col-start-3'
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {block.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Visual divider */}
          <div 
            className={`mt-20 flex items-center gap-6 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-12 h-px bg-primary/40" />
            <span className="text-xs font-mono text-muted-foreground">CGPA 8.43</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;