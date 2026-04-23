import { useScrollReveal } from '@/hooks/useScrollReveal';

const Education = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="education" className="py-32 relative">
      {/* Section marker */}
      <div className="absolute right-8 md:right-16 top-32 text-xs font-heading font-bold tracking-[0.3em] uppercase text-muted-foreground/50 hidden lg:block"
           style={{ writingMode: 'vertical-rl' }}>
        EDUCATION
      </div>

      <div className="container px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center text-foreground drop-shadow-[0_0_8px_rgba(176,38,255,0.3)] uppercase tracking-widest">
            Education
          </h2>

          {/* Bento Box Layout */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Primary Degree - Full Width Top */}
            <div className={`md:col-span-2 bg-black border border-border clip-edges p-8 md:p-10 transition-all duration-700 hover:border-primary/60 hover:purple-glow hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl md:text-4xl font-heading font-bold text-foreground group-hover:text-primary transition-colors tracking-wide mb-2">
                    B.Tech, Computer Science
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    VNR Vignana Jyothi Institute of Engineering and Technology
                  </p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 bg-primary/10 border border-primary/30 clip-edges">
                  <span className="text-sm font-heading font-black text-primary tracking-widest uppercase">2023 – 2027</span>
                </div>
              </div>
              <div className="pt-6 border-t border-border/30">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Currently pursuing B.Tech in Computer Science with a CGPA of 8.51. Focusing heavily on system design, data structures, and advanced backend engineering architectures.
                </p>
              </div>
            </div>

            {/* Secondary Education - Side by Side */}
            <div className={`bg-black border border-border clip-edges p-8 transition-all duration-700 delay-100 hover:border-primary/50 hover:purple-glow hover:-translate-y-1 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors tracking-wide mb-2">
                  Intermediate
                </h3>
                <p className="text-muted-foreground text-sm">Excellencia Junior College</p>
              </div>
              <span className="inline-block px-3 py-1 bg-primary/5 border border-primary/20 text-xs font-heading font-bold text-primary tracking-widest mb-4 clip-edges">
                2021 – 2023
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Completed intermediate education focusing on mathematics and physical sciences with <span className="text-foreground font-bold">96.1% marks</span>.
              </p>
            </div>

            <div className={`bg-black border border-border clip-edges p-8 transition-all duration-700 delay-200 hover:border-primary/50 hover:purple-glow hover:-translate-y-1 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors tracking-wide mb-2">
                  CBSE (Class X)
                </h3>
                <p className="text-muted-foreground text-sm">Silver Oaks International School</p>
              </div>
              <span className="inline-block px-3 py-1 bg-primary/5 border border-primary/20 text-xs font-heading font-bold text-primary tracking-widest mb-4 clip-edges">
                2021
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Completed secondary school education under the CBSE curriculum with <span className="text-foreground font-bold">85.6% marks</span>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;