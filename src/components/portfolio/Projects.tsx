import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink, Github, Users, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  outcomes: string[];
  github?: string;
  live?: string;
  icon: typeof Users;
}

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  const projects: Project[] = [
    {
      title: 'Nest Notion',
      problem: 'Students lacked a centralized platform to share and access academic resources efficiently.',
      solution: 'Built a collaborative academic resource platform with optimized database queries, pagination, and role-based access control.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      outcomes: ['80+ active students', '40% faster data fetch', 'Secure content management'],
      github: 'https://github.com/karkarnati/nest-notion',
      icon: Users,
    },
    {
      title: 'Submira',
      problem: 'Users struggled to track and manage multiple recurring subscriptions.',
      solution: 'Developed a full-stack subscription tracker with modular REST APIs, automated renewal reminders via cron jobs.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Cron'],
      outcomes: ['1000+ records/user', '30% better engagement', 'Automated reminders'],
      github: 'https://github.com/karkarnati/submira',
      icon: Clock,
    },
    {
      title: 'Shrubyvore',
      problem: 'New gardeners needed an accessible guide with personalized plant care information.',
      solution: 'Created an interactive gardening web app with detailed plant entries, search, and filtering features.',
      techStack: ['React', 'TailwindCSS', 'JavaScript'],
      outcomes: ['30+ plant entries', '25% longer sessions', 'Responsive design'],
      github: 'https://github.com/karkarnati/shrubyvore',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section header */}
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">// Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I've Built
            </h2>
            <p className="text-muted-foreground">
              Real-world applications focused on solving genuine problems.
            </p>
          </div>

          {/* Projects grid */}
          <div className="max-w-5xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 
                  transition-all duration-500 hover-lift ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Project icon */}
                  <div className="p-4 rounded-xl bg-muted shrink-0 group-hover:bg-primary/10 transition-colors">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Project content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <div className="flex gap-2 shrink-0">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                            aria-label="View on GitHub"
                          >
                            <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                            aria-label="View live site"
                          >
                            <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">Problem</span>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">Solution</span>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Outcomes */}
                    <div className="flex flex-wrap gap-4">
                      {project.outcomes.map((outcome) => (
                        <span key={outcome} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {outcome}
                        </span>
                      ))}
                    </div>
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

export default Projects;
