import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "@/components/TextReveal";

interface Props {
  image: string;
  quote: string;
  author?: string;
}

const ParallaxBreak = ({ image, quote, author }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.5, 0.7]);

  return (
    <div ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden flex items-center justify-center">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={image} alt="" className="w-full h-[130%] object-cover" />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-background"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <TextReveal
          text={quote}
          className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground"
        />
        {author && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-primary tracking-[0.2em] uppercase"
          >
            — {author}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default ParallaxBreak;
