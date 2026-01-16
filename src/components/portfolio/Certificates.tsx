import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Download, Award, Calendar, Building } from 'lucide-react';

const Certificates = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      downloadUrl: '#', // Replace with actual certificate URL
    },
    {
      title: 'Smart Interviews — Certificate of Completion',
      issuer: 'Smart Interviews',
      date: '2025',
      description: 'Structured problem solving and competitive programming training.',
      downloadUrl: '#', // Replace with actual certificate URL
    },
  ];

  const handleDownload = (url: string, title: string) => {
    console.log(`Downloading certificate: ${title}`);
    alert(`Certificate "${title}" would be downloaded here.`);
  };

  const handleCertificateClick = (index: number) => {
    setFeaturedIndex(index);
  };

  const featuredCert = certificates[featuredIndex];
  const gridCertificates = certificates.filter((_, index) => index !== featuredIndex);

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full"></div>
      </div>

      {/* Section marker */}
      <div className="absolute right-8 md:right-16 top-32 text-xs font-mono text-muted-foreground/50 writing-mode-vertical hidden lg:block"
           style={{ writingMode: 'vertical-rl' }}>
        certificates
      </div>

      <div className="container px-6 relative">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Certificates
          </h2>

          {/* Unique Certificate Layout */}
          <div className="max-w-7xl mx-auto">
            {/* Featured Certificate - Large and prominent */}
            <div className="mb-16">
              <div className="relative max-w-2xl mx-auto">
                {/* Certificate border decoration */}
                <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl transform rotate-1 animate-pulse"></div>
                <div className="absolute -inset-2 border border-primary/40 rounded-xl transform -rotate-1"></div>

                <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border border-border rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                  {/* Certificate header with seal */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="w-6 h-6 text-primary" />
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full animate-pulse">
                          {featuredCert.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {featuredCert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{featuredCert.issuer}</span>
                      </div>
                    </div>

                    {/* Certificate seal */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Certificate content */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredCert.description}
                  </p>

                  {/* Download button */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleDownload(featuredCert.downloadUrl, featuredCert.title)}
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium group/btn hover:scale-105 transform"
                    >
                      <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                      Download Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Grid - Interactive hover effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gridCertificates.map((cert, gridIndex) => {
                const actualIndex = certificates.findIndex(c => c === cert);
                const isHovered = hoveredIndex === actualIndex;

                return (
                  <div
                    key={actualIndex}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(actualIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleCertificateClick(actualIndex)}
                  >
                    {/* Certificate card with hover transformation */}
                    <div className={`relative transition-all duration-500 transform ${
                      isHovered
                        ? 'scale-105 rotate-1 shadow-2xl bg-gradient-to-br from-card via-card/95 to-card/90'
                        : 'hover:scale-102 hover:shadow-xl'
                    }`}>
                      {/* Date badge - Always visible on top */}
                      <div className={`absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-mono transform transition-all duration-300 z-10 ${
                        isHovered ? '-rotate-1 scale-110 shadow-lg' : '-rotate-2'
                      }`}>
                        {cert.date}
                      </div>

                      {/* Certificate content */}
                      <div className={`bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 transition-all duration-300 ${
                        isHovered ? 'border-primary/50' : ''
                      }`}>
                        <div className="pt-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className={`text-lg font-semibold transition-colors ${
                                isHovered ? 'text-primary' : 'text-foreground group-hover:text-primary'
                              }`}>
                                {cert.title}
                              </h3>
                              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Building className="w-3 h-3" />
                                <span>{cert.issuer}</span>
                              </div>
                            </div>
                            <Award className={`w-5 h-5 transition-colors ${
                              isHovered ? 'text-primary animate-pulse' : 'text-primary/60 group-hover:text-primary'
                            }`} />
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {cert.description}
                          </p>

                          {/* Small download button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(cert.downloadUrl, cert.title);
                            }}
                            className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-xs font-medium group/download"
                          >
                            <Download className="w-3 h-3 group-hover/download:translate-y-0.5 transition-transform" />
                            Download
                          </button>
                        </div>

                        {/* Corner decoration */}
                        <div className={`absolute bottom-0 right-0 w-0 h-0 border-l-8 border-l-transparent border-b-8 transform translate-x-2 translate-y-2 transition-colors ${
                          isHovered ? 'border-b-primary/20' : 'border-b-primary/10'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;