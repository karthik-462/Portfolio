import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Open to opportunities</span>
          </div>
          
          {/* Name */}
          <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Karthikeya</span>{' '}
            <span className="text-gradient">Karnati</span>
          </h1>
          
          {/* Title */}
          <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground font-mono mb-6">
            Software Developer
          </p>
          
          {/* Description */}
          <p className="animate-fade-up-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Building production-grade web applications with a focus on{' '}
            <span className="text-foreground">clean architecture</span>,{' '}
            <span className="text-foreground">problem solving</span>, and{' '}
            <span className="text-foreground">system design</span>. 
            Currently pursuing B.Tech in Computer Science.
          </p>
          
          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 glow-effect"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-muted font-semibold px-8"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          {/* Social links */}
          <div className="animate-fade-up-delay-3 flex items-center justify-center gap-6">
            <a 
              href="https://github.com/karkarnati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/karthikeya-karnati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:karkarnati@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
