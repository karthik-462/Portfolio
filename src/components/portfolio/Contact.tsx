import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowUpRight, Mail } from 'lucide-react';

const Contact = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          
          {/* Header - centered, calm */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 drop-shadow-[0_0_8px_rgba(176,38,255,0.3)] uppercase tracking-widest">
              Let's connect
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Open to opportunities, collaborations, or just interesting conversations about software.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-12">
            
            <a 
              href="mailto:karkarnati@gmail.com"
              className={`group relative flex items-center gap-4 bg-primary/10 border border-primary/30 p-8 clip-edges hover:bg-primary/20 hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:purple-glow ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary group-hover:animate-pulse" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-heading font-black text-primary/80 uppercase tracking-[0.3em] block mb-1">INITIATE COMMS (OPEN GMAIL)</span>
                <h3 className="text-xl md:text-3xl font-heading font-bold tracking-wide text-foreground group-hover:text-primary transition-colors">
                  karkarnati@gmail.com
                </h3>
              </div>
            </a>

            <div 
              className={`flex flex-col sm:flex-row items-center gap-8 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground mb-1">+91 9030203242</p>
                <p className="text-sm text-muted-foreground">Hyderabad, India</p>
              </div>

              <div className="w-px h-8 bg-border hidden sm:block"></div>
              
              <div className="flex gap-6">
                <a 
                  href="https://github.com/karthik-462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group font-heading font-bold uppercase tracking-widest text-[11px]"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/karthikeya-karnati-950411296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group font-heading font-bold uppercase tracking-widest text-[11px]"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;