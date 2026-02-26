import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const FeaturedWork = () => (
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
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
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
            </motion.div>
          </Link>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default FeaturedWork;
