import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "80+", label: "Happy Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "25+", label: "Team Members" },
];

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="section-padding border-y border-border/30 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-secondary/[0.03]"
        style={{ x: bgX }}
      />
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-border/10"
            style={{ left: `${(i + 1) * 20}%` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 1.5 }}
          />
        ))}
      </div>
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
  );
};

export default StatsSection;
