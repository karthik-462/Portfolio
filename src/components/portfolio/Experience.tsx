import { useScrollReveal } from '@/hooks/useScrollReveal';

const Experience = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="experience" className="py-32 relative">
      
      
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
              <span className="text-xs font-heading font-black text-primary/80 uppercase tracking-widest block mb-2">EXPERIENCE PROTOCOL</span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground drop-shadow-[0_0_8px_rgba(212,25,32,0.3)]">
                Learning By Doing
              </h2>
            </div>

            {/* Experience item - prominent */}
            <div 
              className={`grid md:grid-cols-12 gap-6 transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="md:col-span-4">
                <span className="text-[10px] font-heading font-black text-primary/80 tracking-widest uppercase border border-primary/20 px-3 py-1 clip-edges bg-primary/10">MAY 2025 — JUL 2025</span>
              </div>
              <div className="md:col-span-8">
                <div className="border-l-2 border-primary/40 pl-6">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-1 tracking-wide">
                    Software Tech Lead Intern
                  </h3>
                  <p className="text-xs font-heading font-black tracking-widest uppercase text-primary mb-4 drop-shadow-[0_0_5px_rgba(212,25,32,0.8)]">VISWAM.AI</p>
                  
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