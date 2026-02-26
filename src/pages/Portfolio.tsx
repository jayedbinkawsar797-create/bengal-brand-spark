import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const categories = ["All", "Advertising", "Events", "Packaging", "Design"];

const projects = [
  { img: portfolio1, title: "360° Brand Campaign", category: "Advertising", desc: "Complete brand identity and advertising campaign for a leading FMCG brand." },
  { img: portfolio2, title: "Luxury Gift Packaging", category: "Packaging", desc: "Premium packaging design for exclusive corporate gift collections." },
  { img: portfolio3, title: "Annual Corporate Gala", category: "Events", desc: "Full event management for a 500+ guest corporate celebration." },
  { img: portfolio4, title: "Billboard Campaign", category: "Advertising", desc: "City-wide outdoor advertising campaign across prime Dhaka locations." },
  { img: portfolio1, title: "Social Media Rebrand", category: "Design", desc: "Complete social media visual identity overhaul for a fashion brand." },
  { img: portfolio3, title: "Product Launch Event", category: "Events", desc: "Spectacular product launch featuring immersive brand experiences." },
  { img: portfolio2, title: "Corporate Gift Box", category: "Packaging", desc: "Bespoke corporate gift packaging for an international client." },
  { img: portfolio4, title: "Brand Identity System", category: "Design", desc: "Full brand guidelines and visual identity for a tech startup." },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      <section className="pt-32 pb-20 section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Our Work</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Creative <span className="text-gradient-brand">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Explore our best work across advertising, events, packaging, and design.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(348,80%,48%,0.3)]"
                  : "border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30 bg-card/30"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <AnimatedSection key={project.title + i} delay={i * 0.08}>
                <div className="group relative rounded-xl overflow-hidden cursor-pointer">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs tracking-wider uppercase text-primary mb-1">{project.category}</p>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Like What You <span className="text-gradient-brand">See</span>?
            </h2>
            <p className="text-muted-foreground mb-8">Let's create something extraordinary for your brand.</p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(348,80%,48%,0.4)] transition-all duration-300"
            >
              Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default Portfolio;
