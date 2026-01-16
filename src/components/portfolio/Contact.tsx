import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS configuration - You'll need to set these up in your EmailJS account
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Prepare email parameters
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'karkarnati@gmail.com', // Your email address
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, emailParams, publicKey);

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });

      toast({
        title: 'Message sent successfully!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setTimeout(() => setStatus('idle'), 3000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('idle');

      toast({
        title: 'Failed to send message',
        description: 'Please try again later or contact me directly at karkarnati@gmail.com',
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          
          {/* Header - centered, calm */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Let's connect
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Open to opportunities, collaborations, or just interesting conversations about software.
            </p>
          </div>

          {/* Two column - links and form */}
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Links - simple, direct */}
            <div 
              className={`space-y-8 transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div>
                <span className="text-xs font-mono text-muted-foreground/60 block mb-4">reach out</span>
                
                <a 
                  href="mailto:karkarnati@gmail.com"
                  className="block text-lg text-foreground hover:text-primary transition-colors mb-2"
                >
                  karkarnati@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mb-1">+91 9030203242</p>
                <p className="text-sm text-muted-foreground">Hyderabad, India</p>
              </div>
              
              <div className="space-y-3">
                <a 
                  href="https://github.com/karthik-462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="text-sm">GitHub</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/karthikeya-karnati-950411296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="text-sm">LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Form - minimal */}
            <form 
              onSubmit={handleSubmit}
              className={`space-y-6 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✓' : 'Send message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;