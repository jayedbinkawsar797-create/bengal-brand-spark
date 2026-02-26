import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, HeartHandshake, TrendingUp, Clock, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const reasons = [
  { icon: Zap, title: "Lightning Fast", desc: "We deliver results on aggressive timelines without compromising quality.", num: "01" },
  { icon: Shield, title: "Trusted Partner", desc: "80+ brands trust us with their most critical campaigns and events.", num: "02" },
  { icon: HeartHandshake, title: "Personal Touch", desc: "Every client gets direct access to our creative leadership team.", num: "03" },
  { icon: TrendingUp, title: "ROI Focused", desc: "Our creative work is always backed by strategy that delivers measurable results.", num: "04" },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock availability during campaign and event execution.", num: "05" },
  { icon: Sparkles, title: "Award Quality", desc: "International standard creative output from the heart of Dhaka.", num: "06" },
];

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection className="mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Why Mind?</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Why Brands <span className="text-gradient-brand">Choose Us</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Animated line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/20">
            <motion.div className="w-full bg-primary/40 origin-top" style={{ height: lineHeight }} />
          </div>

          <div className="space-y-16">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.num} delay={i * 0.08}>
                <div className={`flex items-start gap-8 md:gap-16 relative ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 hidden md:block ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <motion.span
                      className="font-heading text-7xl font-bold text-primary/[0.07]"
                      whileInView={{ opacity: [0, 1], x: [i % 2 === 0 ? 30 : -30, 0] }}
                      viewport={{ once: true }}
                    >
                      {r.num}
                    </motion.span>
                  </div>

                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10 mt-2" />

                  <div className={`flex-1 ml-14 md:ml-0 ${i % 2 === 0 ? "" : ""}`}>
                    <div className="glass-card rounded-xl p-6 md:p-8 group hover-lift">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <r.icon size={20} className="text-primary" />
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">{r.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
