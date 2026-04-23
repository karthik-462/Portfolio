import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [stage, setStage] = useState(0);
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 200),
      setTimeout(() => setStage(2), 600),
      setTimeout(() => setStage(3), 1000),
      setTimeout(() => setStage(4), 1400),
      setTimeout(() => setStage(5), 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Subtle accent line */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      
      <div className="container px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Asymmetric layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Left column - Main content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Status - appears first */}
              <div
                className={`inline-flex items-center justify-center p-1 rounded-full bg-primary/10 border border-primary/20 mb-8 transition-all duration-700 transform ${
                  stage >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <span className="inline-flex items-center gap-2 text-xs font-heading font-bold text-primary tracking-wider uppercase drop-shadow-[0_0_8px_rgba(176,38,255,0.6)]">
                  <span className="w-3 h-3 rounded-full bg-purple-500 animate-purple-pulse purple-glow" />
                  System Ready
                </span>
              </div>
              
              {/* Name - large, offset */}
              <div 
                className={`transition-all duration-700 delay-100 ${
                  stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none drop-shadow-[0_0_15px_rgba(176,38,255,0.2)]">
                  <span className="block text-foreground font-heading">Karthikeya</span>
                  <span className="block text-primary drop-shadow-[0_0_20px_rgba(176,38,255,0.5)] font-heading mt-2">Karnati</span>
                </h1>
              </div>
              
              {/* Description - offset paragraph */}
              <div 
                className={`max-w-lg transition-all duration-700 delay-200 ${
                  stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg border-l-2 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">
                  Aspiring software engineer pursuing a B.Tech in Computer Science with hands-on experience in building, and deploying{' '}
                  <span className="text-foreground font-bold">full-stack web applications</span>. Actively seeking opportunities to contribute to{' '}
                  <span className="text-foreground font-bold purple-glow rounded-sm px-1 bg-primary/20">production-level software systems</span>{' '}while strengthening system design, problem solving, and collaborative development skills.
                </p>
              </div>
            </div>
            
            {/* Right column - Actions and links */}
            <div 
              className={`lg:col-span-5 lg:pl-8 space-y-12 transition-all duration-700 delay-400 ${
                stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* CTA */}
              <div className="space-y-4">
                <button
                  onClick={scrollToProjects}
                  className="group flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-sm clip-edges hover-lift font-bold tracking-widest text-sm uppercase transition-all"
                >
                  <span className="tracking-wide">View armor logs</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="/resume.pdf"
                  download="Karthikeya_Karnati_Resume.pdf"
                  className="group flex items-center gap-3 border border-primary text-primary px-6 py-3 rounded-sm clip-edges hover:bg-primary/10 transition-colors uppercase text-sm font-bold tracking-widest"
                >
                  <span className="tracking-wide">Download blueprints</span>
                </a>
                
                <a
                  href="#contact"
                  className="block text-sm text-primary font-bold hover:text-foreground transition-colors uppercase tracking-widest pl-2"
                >
                  Initiate contact protocol →
                </a>
              </div>
              
              {/* Social links - vertical on desktop */}
              <div className="flex lg:flex-col gap-4">
                <a 
                  href="https://github.com/karthik-462" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-heading font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity hidden lg:inline">
                    github.net
                  </span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/karthikeya-karnati-950411296/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs font-heading font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity hidden lg:inline">
                    linkedin.sys
                  </span>
                </a>
                <a 
                  href="mailto:karkarnati@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-heading font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity hidden lg:inline">
                    comms.link
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom accent */}
          <div 
            className={`mt-24 lg:mt-32 flex items-center gap-4 transition-all duration-1000 delay-700 ${
              stage >= 5 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-border via-primary/30 to-transparent" />
            <span className="text-xs font-heading font-bold uppercase text-muted-foreground">More About Me ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;