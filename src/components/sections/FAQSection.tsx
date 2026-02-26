import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  { q: "What services does Mind Communication offer?", a: "We provide comprehensive creative services including advertising, event management, printing solutions, packaging design, graphic design, and corporate promotional support. We handle everything from concept to execution." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on scope. A simple design project may take 1-2 weeks, while a full branding campaign can take 4-8 weeks. We always discuss timelines upfront and stick to our commitments." },
  { q: "Do you work with startups and small businesses?", a: "Absolutely! We work with businesses of all sizes — from startups to established corporations. We tailor our approach and pricing to match your scale and budget." },
  { q: "What makes Mind Communication different from other agencies?", a: "Our combination of local market expertise, international creative standards, and personal attention to every client sets us apart. Our founder is directly involved in every major project." },
  { q: "Can you handle nationwide event management?", a: "Yes! We manage events across Bangladesh — from intimate corporate meetings in Dhaka to large-scale product launches in divisional cities. Our logistics network covers the entire country." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">FAQ</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Common <span className="text-gradient-brand">Questions</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="font-heading text-sm md:text-base font-medium text-foreground pr-8 group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown size={18} className="text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
