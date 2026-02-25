import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Let's <span className="text-gradient-brand">Connect</span>
          </motion.h1>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have a project in mind? We'd love to hear from you. Reach out and let's start creating something extraordinary.
              </p>
            </AnimatedSection>

            {[
              { icon: Phone, label: "Phone", value: "+88-01798823797", href: "tel:+8801798823797" },
              { icon: Mail, label: "Email", value: "jayed@mindcommunicationbd.com", href: "mailto:jayed@mindcommunicationbd.com" },
              { icon: MapPin, label: "Office", value: "14/1, BTI Emporium, Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh", href: "#" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <a href={item.href} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder="+880-XXXX-XXXXXX"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  >
                    <option value="">Select a service</option>
                    <option>Advertising</option>
                    <option>Event Management</option>
                    <option>Printing Solutions</option>
                    <option>Packaging Design</option>
                    <option>Graphic Design</option>
                    <option>Corporate Promotions</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
