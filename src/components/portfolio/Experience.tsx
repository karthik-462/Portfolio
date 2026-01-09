import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  const timeline = [
    {
      type: 'experience',
      icon: Briefcase,
      title: 'Software Tech Lead Intern',
      organization: 'VISWAM.AI',
      period: 'May 2025 – July 2025',
      description: [
        'Guided cohort of 10+ interns, resolving daily technical queries',
        'Restructured internship training workflow',
        'Mentored during project reviews, helping debug issues',
      ],
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.Tech in Computer Science',
      organization: 'VNR VJIET',
      period: '2023 – 2027',
      description: ['CGPA: 8.43', 'Hyderabad, India'],
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Intermediate',
      organization: 'Excellencia Junior College',
      period: '2021 – 2023',
      description: ['Score: 96.1%'],
    },
  ];

  const certifications = [
    {
      title: 'Flutter Development Certification',
      issuer: 'GDGC',
      year: '2023',
      description: 'Cross-platform UI development and state management',
    },
    {
      title: 'Java Programming Fundamentals',
      issuer: 'Infosys Springboard',
      year: '2024',
      description: 'OOP concepts and best practices',
    },
    {
      title: 'Smart Interviews Completion',
      issuer: 'Smart Interviews',
      year: '2025',
      description: 'Problem solving and competitive programming',
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-muted/30">
      <div className="container px-6">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Experience & Education */}
          <div className="mb-16">
            <span className="text-primary font-mono text-sm mb-2 block">// Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Experience & Education
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={`${item.title}-${item.period}`}
                    className={`relative pl-16 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 p-3 rounded-full bg-card border border-border">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <span className="text-sm font-mono text-primary">{item.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{item.organization}</p>
                      <ul className="space-y-1">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <span className="text-primary font-mono text-sm mb-2 block">// Credentials</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Certifications
            </h2>

            <div className="grid sm:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className={`p-5 rounded-xl bg-card border border-border hover:border-primary/30 
                    transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${(index + timeline.length) * 100}ms` }}
                >
                  <Award className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {cert.issuer} • {cert.year}
                  </p>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
