import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  { name: "Rafiq Ahmed", role: "CEO, TechBangla", text: "Mind Communication transformed our brand identity. Their creative vision is unmatched in Bangladesh.", rating: 5 },
  { name: "Sabrina Khan", role: "Marketing Director, FreshFoods", text: "The packaging design they delivered boosted our shelf presence by 300%. Absolute professionals.", rating: 5 },
  { name: "Tariq Hasan", role: "Founder, EventPro BD", text: "Their event management is flawless. Every corporate event they've handled exceeded expectations.", rating: 5 },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section ref={ref} className="section-padding border-y border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Testimonials</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            What Our Clients <span className="text-gradient-green">Say</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12}>
              <motion.div
                className="glass-card rounded-xl p-8 h-full relative group"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <Quote size={32} className="text-primary/20 absolute top-6 right-6 group-hover:text-primary/40 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.1 }}
                    >
                      <Star size={14} className="fill-brand-gold text-brand-gold" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
