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
                className={`transition-all duration-700 ${
                  stage >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Available for opportunities
                </span>
              </div>
              
              {/* Name - large, offset */}
              <div 
                className={`transition-all duration-700 delay-100 ${
                  stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                  <span className="block text-foreground">Karthikeya</span>
                  <span className="block text-gradient mt-2">Karnati</span>
                </h1>
              </div>
              
              {/* Role - smaller, indented */}
              <div 
                className={`pl-1 transition-all duration-700 delay-200 ${
                  stage >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <p className="text-lg md:text-xl font-mono text-primary">
                  Software Developer
                </p>
              </div>
              
              {/* Description - offset paragraph */}
              <div 
                className={`max-w-lg transition-all duration-700 delay-300 ${
                  stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  Building software with intention. Focused on{' '}
                  <span className="text-foreground">system design</span>,{' '}
                  <span className="text-foreground">clean architecture</span>, and solving problems that matter.
                </p>
              </div>
            </div>
            
            {/* Right column - Actions and links */}
            <div 
              className={`lg:col-span-5 lg:pl-8 space-y-12 transition-all duration-700 delay-500 ${
                stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* CTA */}
              <div className="space-y-4">
                <button
                  onClick={scrollToProjects}
                  className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <span className="text-sm font-medium tracking-wide">View my work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="#contact"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  or reach out →
                </a>
              </div>
              
              {/* Social links - vertical on desktop */}
              <div className="flex lg:flex-col gap-4">
                <a 
                  href="https://github.com/karkarnati" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity hidden lg:inline">
                    github
                  </span>
                </a>
                <a 
                  href="https://linkedin.com/in/karthikeya-karnati" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity hidden lg:inline">
                    linkedin
                  </span>
                </a>
                <a 
                  href="mailto:karkarnati@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity hidden lg:inline">
                    email
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
            <span className="text-xs font-mono text-muted-foreground">scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;