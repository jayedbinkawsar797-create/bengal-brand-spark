import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Megaphone, CalendarDays, Printer, Package, Palette, Award, Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleBackground from "@/components/ParticleBackground";
import CountUp from "@/components/CountUp";
import heroBg from "@/assets/hero-bg.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const services = [
  { icon: Megaphone, title: "Advertising", desc: "Strategic campaigns that cut through the noise and reach your audience." },
  { icon: CalendarDays, title: "Event Management", desc: "End-to-end event planning that creates unforgettable experiences." },
  { icon: Printer, title: "Printing Solutions", desc: "High-quality print materials that elevate your brand presence." },
  { icon: Package, title: "Packaging Design", desc: "Premium packaging that makes your products stand out on any shelf." },
  { icon: Palette, title: "Graphic Design", desc: "Visual storytelling that communicates your brand's essence." },
  { icon: Award, title: "Corporate Promotions", desc: "Promotional strategies that drive engagement and brand loyalty." },
];

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "80+", label: "Happy Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "25+", label: "Team Members" },
];

const testimonials = [
  { name: "Rafiq Ahmed", role: "CEO, TechBangla", text: "Mind Communication transformed our brand identity. Their creative vision is unmatched in Bangladesh.", rating: 5 },
  { name: "Sabrina Khan", role: "Marketing Director, FreshFoods", text: "The packaging design they delivered boosted our shelf presence by 300%. Absolute professionals.", rating: 5 },
  { name: "Tariq Hasan", role: "Founder, EventPro BD", text: "Their event management is flawless. Every corporate event they've handled exceeded expectations.", rating: 5 },
];

const clients = ["BRAC", "Walton", "Square", "ACI", "Pran", "Akij", "City Group", "Apex"];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Bangladesh's Premier Creative Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] mb-6"
          >
            Be <span className="text-gradient-brand">Seen</span>,<br />
            Be <span className="text-gradient-green">Remembered</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            We craft bold advertising, stunning designs, and unforgettable events that make brands impossible to ignore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(348,80%,48%,0.4)] transition-all duration-300"
            >
              Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 text-foreground font-semibold hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border/30 overflow-hidden py-5 bg-card/30">
        <div className="marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-block">
              {["ADVERTISING", "EVENT MANAGEMENT", "PRINTING", "PACKAGING", "GRAPHIC DESIGN", "BRANDING", "CORPORATE PROMOTIONS"].map((s) => (
                <span key={s} className="mx-8 text-sm font-heading tracking-[0.3em] text-muted-foreground/70">
                  {s} <span className="text-primary mx-4">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="section-padding max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">What We Do</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Services That <span className="text-gradient-brand">Transform</span>
              </h2>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity mt-4 md:mt-0">
              All Services <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <Link to="/services" className="block h-full">
                <div className="glass-card rounded-xl p-8 hover-lift group cursor-pointer h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <service.icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-y border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-secondary/3" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <div className="counter-number mb-2">
                <CountUp target={stat.number} />
              </div>
              <p className="text-sm text-muted-foreground tracking-wide uppercase">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Featured Work</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Recent <span className="text-gradient-brand">Projects</span>
              </h2>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity">
              View All <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: portfolio1, title: "Brand Campaign", cat: "Advertising" },
            { img: portfolio2, title: "Premium Packaging", cat: "Packaging Design" },
            { img: portfolio3, title: "Corporate Gala", cat: "Event Management" },
          ].map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.15}>
              <Link to="/portfolio" className="group relative rounded-xl overflow-hidden cursor-pointer block">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs tracking-wider uppercase text-primary mb-1">{project.cat}</p>
                  <h3 className="font-heading text-xl font-semibold text-foreground">{project.title}</h3>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding border-y border-border/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Testimonials</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              What Our Clients <span className="text-gradient-green">Say</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <div className="glass-card rounded-xl p-8 h-full relative">
                  <Quote size={32} className="text-primary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} className="fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Trusted By Leading Brands</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {clients.map((client, i) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/25 hover:text-muted-foreground/50 transition-colors duration-500 cursor-default"
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center glass-card rounded-2xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                Ready to Make Your Brand <span className="text-gradient-brand">Unforgettable</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Let's create something extraordinary together. Your brand deserves to be seen and remembered.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(348,80%,48%,0.4)] transition-all duration-300"
              >
                Let's Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default Index;
