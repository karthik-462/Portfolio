import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Download, Building } from 'lucide-react';

const Certificates = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const certificates = [
    {
      title: 'Flutter Development Certification',
      issuer: 'GDGC',
      date: '2023',
      description: 'Covering cross-platform UI development and state management fundamentals.',
      downloadUrl: '#', // Replace with actual certificate URL
    },
    {
      title: 'Java Programming Fundamentals',
      issuer: 'Infosys Springboard',
      date: '2024',
      description: 'Focusing on OOP concepts.',
      downloadUrl: '#',
    },
    {
      title: 'Smart Interviews — Certificate of Completion',
      issuer: 'Smart Interviews',
      date: '2025',
      description: 'Structured problem solving and competitive programming training.',
      downloadUrl: '#',
    },
  ];

  const handleDownload = (url: string, title: string) => {
    console.log(`Downloading certificate: ${title}`);
    alert(`Certificate "${title}" would be downloaded here.`);
  };

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      {/* Section marker */}
      <div className="absolute right-8 md:right-16 top-32 text-xs font-heading font-bold tracking-[0.3em] uppercase text-muted-foreground/50 hidden lg:block"
           style={{ writingMode: 'vertical-rl' }}>
        CERTIFICATES
      </div>

      <div className="container px-6 relative">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center text-foreground drop-shadow-[0_0_8px_rgba(176,38,255,0.3)] uppercase tracking-widest">
            Certificates
          </h2>

          {/* Simple Responsive Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`relative group bg-black border border-border/80 clip-edges p-6 sm:p-8 transition-all duration-700 hover:border-primary/50 hover:-translate-y-2 hover:purple-glow flex flex-col ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >

                <div className="pt-4 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 mt-2">
                        <h3 className="text-xl font-heading font-bold tracking-wide text-foreground group-hover:text-primary transition-colors mb-2">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Building className="w-4 h-4" />
                          <span>{cert.issuer}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                      {cert.description}
                    </p>
                  </div>

                  {/* Immediate Download Button */}
                  <div className="mt-auto pt-6 border-t border-border/30">
                    <button
                      onClick={() => handleDownload(cert.downloadUrl, cert.title)}
                      className="w-full flex items-center justify-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-3 clip-edges text-xs font-heading font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                    >
                      <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                      DOWNLOAD SHIELD
                    </button>
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

export default Certificates;