import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Code2, Database, Server, Lightbulb } from 'lucide-react';

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  const approaches = [
    {
      icon: Lightbulb,
      title: 'Problem First',
      description: 'I start by understanding the core problem before writing any code.',
    },
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, readable code that scales with the project.',
    },
    {
      icon: Server,
      title: 'Full Stack',
      description: 'Comfortable across the entire stack, from database to deployment.',
    },
    {
      icon: Database,
      title: 'System Thinking',
      description: 'Designing with data flow, performance, and user experience in mind.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section header */}
          <div className="mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">// About</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How I Approach Software
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              As a Computer Science student at VNR VJIET, I've developed a passion for building 
              software that solves real problems. My approach combines strong fundamentals with 
              hands-on experience in full-stack development, emphasizing clean architecture and 
              thoughtful system design.
            </p>
          </div>

          {/* Approach cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {approaches.map((item, index) => (
              <div
                key={item.title}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/50 
                  transition-all duration-500 hover-lift ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
