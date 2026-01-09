const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/60 font-mono">
              © {new Date().getFullYear()} Karthikeya Karnati
            </p>
            
            <p className="text-xs text-muted-foreground/40 font-mono">
              Built with intention
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;