import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import aboutTeam from "@/assets/about-team.jpg";
import { Target, Eye, Lightbulb, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Target, title: "Precision", desc: "Every detail matters. We craft with surgical precision to deliver perfection." },
  { icon: Eye, title: "Vision", desc: "We see beyond the obvious and create work that shapes the future." },
  { icon: Lightbulb, title: "Innovation", desc: "Pushing creative boundaries to deliver solutions that stand apart." },
  { icon: Users, title: "Collaboration", desc: "Your vision, our expertise — together we create magic." },
];

const timeline = [
  { year: "2016", title: "Founded", desc: "Mind Communication was born in Dhaka with a vision to transform brand communication." },
  { year: "2018", title: "50+ Projects", desc: "Reached our first major milestone, serving brands across Bangladesh." },
  { year: "2020", title: "Full-Service Agency", desc: "Expanded into event management, packaging, and corporate promotions." },
  { year: "2024", title: "Industry Leader", desc: "Recognized as one of Bangladesh's premier creative agencies with 150+ projects delivered." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-32 pb-20 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Our Story</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          We Are <span className="text-gradient-brand">Mind</span><br />
          Communication
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          A full-service creative agency based in Dhaka, Bangladesh. We help brands make an impact through powerful advertising, stunning design, and flawless event execution.
        </motion.p>
      </div>
    </section>

    {/* Image */}
    <AnimatedSection className="section-padding max-w-7xl mx-auto">
      <div className="rounded-2xl overflow-hidden relative group">
        <img src={aboutTeam} alt="Mind Communication team" className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>
    </AnimatedSection>

    {/* Story */}
    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Our Story</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Built on <span className="text-gradient-brand">Passion</span> & Purpose
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded with a vision to redefine creative communications in Bangladesh, Mind Communication has grown into a trusted partner for brands seeking excellence.
            </p>
            <p>
              Under the leadership of Director Jayed Bin Kawsar, our team combines local market insight with global creative standards to deliver campaigns that resonate.
            </p>
            <p>
              From intimate corporate events to large-scale advertising campaigns, we bring the same level of dedication and creativity to every project.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Our Journey</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Milestones <span className="text-gradient-green">Achieved</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50" />
          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.15}>
              <div className={`flex items-start gap-8 mb-12 relative ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 hidden md:block ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <span className="font-heading text-4xl font-bold text-primary/30">{item.year}</span>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 ring-4 ring-background" />
                <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <span className="font-heading text-2xl font-bold text-primary/30 md:hidden">{item.year}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Core Values</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            What Drives <span className="text-gradient-green">Us</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-8 hover-lift h-full relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors duration-700" />
                <v.icon size={28} className="text-secondary mb-4 relative" />
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground relative">{v.title}</h3>
                <p className="text-sm text-muted-foreground relative">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Director */}
    <section className="section-padding max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="glass-card rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 ring-2 ring-primary/30">
              <span className="font-heading text-2xl font-bold text-primary">JK</span>
            </div>
            <h3 className="font-heading text-2xl font-bold mb-1 text-foreground">Jayed Bin Kawsar</h3>
            <p className="text-sm text-primary mb-6">Founder & Director</p>
            <p className="text-muted-foreground leading-relaxed italic">
              "Our mission is simple — to help brands in Bangladesh and beyond communicate with clarity, creativity, and impact. Every project we take on is a chance to push boundaries and create something remarkable."
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Want to Work With <span className="text-gradient-brand">Us</span>?
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(348,80%,48%,0.4)] transition-all duration-300"
          >
            Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  </Layout>
);

export default About;
