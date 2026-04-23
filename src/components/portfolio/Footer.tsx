const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-muted-foreground/60 font-heading font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} WAKANDA DESIGN GROUP — KARTHIKEYA KARNATI
            </p>
            
            <p className="text-[10px] text-primary/60 font-heading font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" />
              SYSTEM ONLINE // VIBRANIUM NETWORKS NOMINAL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;