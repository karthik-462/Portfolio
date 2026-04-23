import { useState, useEffect } from 'react';

const OpeningSequence = () => {
  const [phase, setPhase] = useState<'visible' | 'exiting' | 'done'>('visible');
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const lines = [
    'WAKANDA SYSTEMS INITIALIZING',
    'VIBRANIUM NETWORK ONLINE',
    'PORTFOLIO LOADED',
  ];

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Cycle text lines
    const textInterval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % lines.length);
    }, 600);

    // Begin exit after 2 seconds
    const exitTimer = setTimeout(() => {
      clearInterval(textInterval);
      setPhase('exiting');
    }, 2000);

    // Fully remove after exit animation
    const doneTimer = setTimeout(() => {
      setPhase('done');
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        phase === 'exiting' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
      style={{ background: 'hsl(260, 20%, 3%)' }}
    >
      {/* Vibranium grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal glowing lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px opacity-10"
            style={{
              top: `${(i + 1) * 12.5}%`,
              background: 'linear-gradient(90deg, transparent, hsl(280, 100%, 65%), transparent)',
            }}
          />
        ))}
        {/* Vertical glowing lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px opacity-10"
            style={{
              left: `${(i + 1) * 16.66}%`,
              background: 'linear-gradient(180deg, transparent, hsl(280, 100%, 65%), transparent)',
            }}
          />
        ))}
      </div>

      {/* Pulsing outer ring */}
      <div
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-purple-500/20 animate-ping"
        style={{ animationDuration: '2s' }}
      />
      <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-purple-500/10" />

      {/* Core diamond */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Wakanda diamond symbol */}
        <div className="relative">
          <div
            className="w-16 h-16 md:w-20 md:h-20 rotate-45 border-2 border-purple-500"
            style={{
              boxShadow: '0 0 40px hsl(280, 100%, 65%, 0.6), inset 0 0 20px hsl(280, 100%, 65%, 0.2)',
              background: 'hsl(280, 100%, 65%, 0.1)',
            }}
          />
          <div
            className="absolute inset-3 rotate-45 border border-purple-400/60"
            style={{ boxShadow: '0 0 15px hsl(280, 100%, 65%, 0.4)' }}
          />
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"
              style={{ boxShadow: '0 0 20px hsl(280, 100%, 65%, 0.8)' }}
            />
          </div>
        </div>

        {/* Text block */}
        <div className="text-center space-y-2">
          <div
            className="text-[10px] sm:text-xs font-heading font-black tracking-[0.4em] uppercase transition-all duration-300"
            style={{ color: 'hsl(280, 100%, 65%)', textShadow: '0 0 15px hsl(280, 100%, 65%, 0.6)' }}
          >
            {lines[textIndex]}
          </div>
          <div className="text-muted-foreground text-[9px] sm:text-[10px] font-heading tracking-[0.3em] uppercase opacity-60">
            KARTHIKEYA KARNATI — PORTFOLIO
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 sm:w-64 h-px bg-white/5 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, hsl(280, 100%, 40%), hsl(280, 100%, 65%))',
              boxShadow: '0 0 10px hsl(280, 100%, 65%, 0.8)',
            }}
          />
          {/* Scanning shimmer */}
          <div
            className="absolute top-0 h-full w-8"
            style={{
              left: `${Math.max(progress - 8, 0)}%`,
              background: 'linear-gradient(90deg, transparent, hsl(280, 100%, 80%, 0.8), transparent)',
            }}
          />
        </div>

        <div
          className="text-[8px] sm:text-[9px] font-heading font-bold tracking-widest"
          style={{ color: 'hsl(280, 100%, 65%, 0.5)' }}
        >
          {progress < 100 ? `${progress}%` : 'COMPLETE'}
        </div>
      </div>

      {/* Animated corner brackets */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-purple-500/40" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-purple-500/40" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-purple-500/40" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-purple-500/40" />
    </div>
  );
};

export default OpeningSequence;
