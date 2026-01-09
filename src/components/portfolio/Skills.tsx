import { useScrollReveal } from '@/hooks/useScrollReveal';

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'TailwindCSS', 'HTML5', 'CSS3'],
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'OracleSQL'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Power BI'],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="container px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section header */}
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">// Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Toolkit
            </h2>
            <p className="text-muted-foreground">
              Technologies and tools I use to build software systems.
            </p>
          </div>

          {/* Skills grid */}
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`p-6 rounded-xl bg-card border border-border transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-sm font-semibold text-primary font-mono mb-4 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-muted rounded-lg text-foreground 
                        border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
