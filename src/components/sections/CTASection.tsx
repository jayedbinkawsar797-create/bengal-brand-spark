import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <section ref={ref} className="section-padding">
      <AnimatedSection>
        <motion.div
          style={{ scale }}
          className="max-w-4xl mx-auto text-center glass-card rounded-2xl p-12 md:p-20 relative overflow-hidden"
        >
          <motion.div
            className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"
            style={{ rotate }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"
            style={{ rotate: useTransform(rotate, v => -v) }}
          />
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Ready to Make Your Brand <span className="text-gradient-brand">Unforgettable</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's create something extraordinary together. Your brand deserves to be seen and remembered.
            </p>
            <MagneticButton>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(348,80%,48%,0.4)] transition-all duration-300"
              >
                Let's Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
};

export default CTASection;
