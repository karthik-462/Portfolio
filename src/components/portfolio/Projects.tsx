import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Github, ArrowUpRight, ChevronDown } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  problem: string;
  approach: string;
  tools: string[];
  result: string;
  github?: string;
}

const Projects = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'nest-notion',
      title: 'Nest Notion',
      problem: 'Students needed a centralized platform to share and access academic resources without friction.',
      approach: 'Designed a role-based system with optimized MongoDB queries and implemented pagination for scalability. Built modular components for different user types.',
      tools: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      result: '80+ active students, 40% faster data retrieval through query optimization',
      github: 'https://github.com/karkarnati/nest-notion',
    },
    {
      id: 'submira',
      title: 'Submira',
      problem: 'Users lose track of recurring subscriptions, leading to unnecessary charges and poor financial awareness.',
      approach: 'Built a REST API with scheduled tasks for renewal reminders. Focused on data integrity and user-specific data isolation.',
      tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Cron'],
      result: 'Handles 1000+ records per user, 30% improvement in user engagement',
      github: 'https://github.com/karkarnati/submira',
    },
    {
      id: 'shrubyvore',
      title: 'Shrubyvore',
      problem: 'New gardeners struggle to find accessible, structured plant care information.',
      approach: 'Created a searchable plant database with filtering. Prioritized mobile responsiveness and fast initial load.',
      tools: ['React', 'TailwindCSS', 'JavaScript'],
      result: '30+ plant entries, 25% longer average session duration',
      github: 'https://github.com/karkarnati/shrubyvore',
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Header - offset */}
          <div 
            className={`mb-16 pl-0 md:pl-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs font-mono text-primary/60 block mb-2">selected work</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Engineering case studies
            </h2>
          </div>

          {/* Projects - varied layouts */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className={`relative border border-border rounded-lg overflow-hidden transition-all duration-300 ${
                    expandedId === project.id ? 'border-primary/40 bg-card' : 'hover:border-primary/20'
                  }`}
                >
                  {/* Header - always visible */}
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="w-full text-left p-6 md:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                            {project.title}
                          </h3>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                          {project.problem}
                        </p>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
                          expandedId === project.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    
                    {/* Tools preview */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span 
                          key={tool}
                          className="text-xs font-mono text-primary/70 px-2 py-1 bg-primary/5 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-xs font-mono text-muted-foreground">
                          +{project.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </button>
                  
                  {/* Expanded content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedId === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 border-t border-border/50">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Approach */}
                        <div>
                          <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">
                            Approach
                          </span>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {project.approach}
                          </p>
                        </div>
                        
                        {/* Result */}
                        <div>
                          <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">
                            Result
                          </span>
                          <p className="mt-2 text-sm text-foreground leading-relaxed">
                            {project.result}
                          </p>
                        </div>
                      </div>
                      
                      {/* Full tech stack */}
                      <div className="mt-6 pt-4 border-t border-border/30">
                        <div className="flex flex-wrap gap-3">
                          {project.tools.map((tool) => (
                            <span 
                              key={tool}
                              className="text-xs font-mono text-foreground/80"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* More projects hint */}
          <div 
            className={`mt-12 text-right transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a 
              href="https://github.com/karkarnati"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>More on GitHub</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;