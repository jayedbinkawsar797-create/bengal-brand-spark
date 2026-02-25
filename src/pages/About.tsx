import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import aboutTeam from "@/assets/about-team.jpg";
import { Target, Eye, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", desc: "Every detail matters. We craft with surgical precision to deliver perfection." },
  { icon: Eye, title: "Vision", desc: "We see beyond the obvious and create work that shapes the future." },
  { icon: Lightbulb, title: "Innovation", desc: "Pushing creative boundaries to deliver solutions that stand apart." },
  { icon: Users, title: "Collaboration", desc: "Your vision, our expertise — together we create magic." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-primary mb-4"
        >
          About Us
        </motion.p>
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
      <div className="rounded-2xl overflow-hidden">
        <img src={aboutTeam} alt="Mind Communication team" className="w-full h-[400px] md:h-[500px] object-cover" />
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

    {/* Values */}
    <section className="section-padding border-y border-border/30">
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
              <div className="glass-card rounded-xl p-8 hover-lift h-full">
                <v.icon size={28} className="text-secondary mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Director */}
    <section className="section-padding max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="glass-card rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <span className="font-heading text-2xl font-bold text-primary">JK</span>
          </div>
          <h3 className="font-heading text-2xl font-bold mb-1 text-foreground">Jayed Bin Kawsar</h3>
          <p className="text-sm text-primary mb-6">Founder & Director</p>
          <p className="text-muted-foreground leading-relaxed">
            "Our mission is simple — to help brands in Bangladesh and beyond communicate with clarity, creativity, and impact. Every project we take on is a chance to push boundaries and create something remarkable."
          </p>
        </div>
      </AnimatedSection>
    </section>
  </Layout>
);

export default About;
