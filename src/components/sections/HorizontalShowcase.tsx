import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const showcaseItems = [
  { img: portfolio1, title: "Brand Strategy", cat: "Advertising", year: "2024" },
  { img: portfolio2, title: "Luxury Packaging", cat: "Design", year: "2024" },
  { img: portfolio3, title: "Corporate Gala", cat: "Events", year: "2023" },
  { img: portfolio4, title: "Billboard Campaign", cat: "Outdoor", year: "2023" },
  { img: portfolio1, title: "Digital Campaign", cat: "Marketing", year: "2024" },
];

const HorizontalShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);

  return (
    <section ref={containerRef} className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Showcase</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Selected <span className="text-gradient-green">Work</span>
          </h2>
        </AnimatedSection>
      </div>

      <motion.div style={{ x }} className="flex gap-6 pl-6">
        {showcaseItems.map((item, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden group shrink-0 w-[300px] md:w-[450px] cursor-pointer"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs tracking-wider uppercase text-primary">{item.cat}</span>
                <span className="text-xs text-muted-foreground">— {item.year}</span>
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HorizontalShowcase;
