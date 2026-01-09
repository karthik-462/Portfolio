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
                      Led a cohort of 10+ interns, resolving daily technical queries and unblocking development workflows.
                    </p>
                    <p>
                      Restructured the internship training program to improve onboarding efficiency.
                    </p>
                    <p>
                      Mentored during project reviews, helping debug complex issues and improve code quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-24">
            {/* Header - aligned differently */}
            <div 
              className={`mb-12 md:ml-auto md:text-right max-w-md transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-xs font-mono text-primary/60 block mb-2">education</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Foundation
              </h2>
            </div>

            {/* Education items */}
            <div className="space-y-8">
              <div 
                className={`grid md:grid-cols-12 gap-6 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="md:col-span-5 md:col-start-2">
                  <h3 className="text-lg font-medium text-foreground">B.Tech Computer Science</h3>
                  <p className="text-sm text-muted-foreground">VNR VJIET, Hyderabad</p>
                </div>
                <div className="md:col-span-3">
                  <span className="text-xs font-mono text-muted-foreground">2023 — 2027</span>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="text-sm font-mono text-primary">8.43 CGPA</span>
                </div>
              </div>
              
              <div 
                className={`grid md:grid-cols-12 gap-6 transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="md:col-span-5 md:col-start-2">
                  <h3 className="text-lg font-medium text-foreground">Intermediate</h3>
                  <p className="text-sm text-muted-foreground">Excellencia Junior College</p>
                </div>
                <div className="md:col-span-3">
                  <span className="text-xs font-mono text-muted-foreground">2021 — 2023</span>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="text-sm font-mono text-primary">96.1%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications - minimal, revealed */}
          <div 
            className={`transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="border-t border-border/50 pt-8">
              <span className="text-xs font-mono text-muted-foreground/60 block mb-6">credentials</span>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <div className="group">
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    Flutter Development
                  </p>
                  <p className="text-xs text-muted-foreground">GDGC • 2023</p>
                </div>
                <div className="group">
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    Java Programming
                  </p>
                  <p className="text-xs text-muted-foreground">Infosys Springboard • 2024</p>
                </div>
                <div className="group">
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    Smart Interviews
                  </p>
                  <p className="text-xs text-muted-foreground">Problem Solving • 2025</p>
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