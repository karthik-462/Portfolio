import { useScrollReveal } from '@/hooks/useScrollReveal';

const Experience = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="experience" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />
      
      <div className="container px-6 relative">
        <div ref={ref} className="max-w-5xl mx-auto">
          
          {/* Experience */}
          <div className="mb-24">
            {/* Header */}
            <div 
              className={`mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-xs font-mono text-primary/60 block mb-2">experience</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Learning by doing
              </h2>
            </div>

            {/* Experience item - prominent */}
            <div 
              className={`grid md:grid-cols-12 gap-6 transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="md:col-span-4">
                <span className="text-xs font-mono text-muted-foreground">May 2025 — July 2025</span>
              </div>
              <div className="md:col-span-8">
                <div className="border-l-2 border-primary/40 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Software Tech Lead Intern
                  </h3>
                  <p className="text-sm text-primary mb-4">VISWAM.AI</p>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Supported and guided a cohort of 10+ interns by resolving daily technical queries related to web development.
                    </p>
                    <p>
                      Assisted in restructuring the internship training workflow and mentored interns during project review sessions, helping them debug issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;