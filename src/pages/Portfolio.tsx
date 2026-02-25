import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const categories = ["All", "Advertising", "Events", "Packaging", "Design"];

const projects = [
  { img: portfolio1, title: "360° Brand Campaign", category: "Advertising", desc: "Complete brand identity and advertising campaign for a leading FMCG brand." },
  { img: portfolio2, title: "Luxury Gift Packaging", category: "Packaging", desc: "Premium packaging design for exclusive corporate gift collections." },
  { img: portfolio3, title: "Annual Corporate Gala", category: "Events", desc: "Full event management for a 500+ guest corporate celebration with live entertainment." },
  { img: portfolio4, title: "Billboard Campaign", category: "Advertising", desc: "City-wide outdoor advertising campaign across prime Dhaka locations." },
  { img: portfolio1, title: "Social Media Rebrand", category: "Design", desc: "Complete social media visual identity overhaul for an emerging fashion brand." },
  { img: portfolio3, title: "Product Launch Event", category: "Events", desc: "Spectacular product launch event featuring immersive brand experiences." },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

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
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Creative <span className="text-gradient-brand">Portfolio</span>
          </motion.h1>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <AnimatedSection key={project.title + i} delay={i * 0.1}>
                <div className="group relative rounded-xl overflow-hidden cursor-pointer">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div>
                      <p className="text-xs tracking-wider uppercase text-primary mb-1">{project.category}</p>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </Layout>
  );
};

export default Portfolio;
