import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Megaphone, CalendarDays, Printer, Package, Palette, Award } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
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

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base tracking-[0.4em] uppercase text-muted-foreground mb-6"
          >
            Advertising • Design • Events
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
          >
            Be <span className="text-gradient-brand">Seen</span>,<br />
            Be <span className="text-gradient-green">Remembered</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Bangladesh's premier creative agency delivering bold advertising, stunning designs, and unforgettable events.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-muted transition-colors"
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
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border/30 overflow-hidden py-4">
        <div className="marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-block">
              {["ADVERTISING", "EVENT MANAGEMENT", "PRINTING", "PACKAGING", "GRAPHIC DESIGN", "BRANDING"].map((s) => (
                <span key={s} className="mx-8 text-sm font-heading tracking-[0.3em] text-muted-foreground">
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
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">What We Do</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16">
            Services That <span className="text-gradient-brand">Transform</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-8 hover-lift group cursor-pointer h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-y border-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <div className="counter-number mb-2">{stat.number}</div>
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
              <div className="group relative rounded-xl overflow-hidden cursor-pointer">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p className="text-xs tracking-wider uppercase text-primary mb-1">{project.cat}</p>
                    <h3 className="font-heading text-xl font-semibold text-foreground">{project.title}</h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center glass-card rounded-2xl p-12 md:p-20 animate-pulse-glow">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Ready to Make Your Brand <span className="text-gradient-brand">Unforgettable</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's create something extraordinary together. Your brand deserves to be seen and remembered.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Let's Talk <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default Index;
