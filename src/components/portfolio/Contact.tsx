import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'karkarnati@gmail.com',
      href: 'mailto:karkarnati@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/karkarnati',
      href: 'https://github.com/karkarnati',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/karthikeya-karnati',
      href: 'https://linkedin.com/in/karthikeya-karnati',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">// Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have a project in mind or want to discuss opportunities? 
              I'm always open to interesting conversations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div
              className={`space-y-6 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-muted">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleSubmit}
              className={`space-y-4 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Message Sent
                  </>
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
