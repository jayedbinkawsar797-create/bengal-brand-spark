import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import MagneticButton from "@/components/MagneticButton";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: 0.5 + i * 0.04, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
  };

  const title1 = "Be Seen,";
  const title2 = "Be Remembered";

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-[120%] object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{ y: textY, opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Bangladesh's Premier Creative Agency</span>
        </motion.div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[0.9] mb-6 perspective-[1000px]">
          <span className="block overflow-hidden">
            {title1.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block ${char === " " ? "w-4" : ""} ${i >= 3 && i <= 6 ? "text-gradient-brand" : ""}`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden mt-2">
            {title2.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i + title1.length}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block ${char === " " ? "w-4" : ""} ${i >= 3 ? "text-gradient-green" : ""}`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          We craft bold advertising, stunning designs, and unforgettable events that make brands impossible to ignore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(348,80%,48%,0.4)] transition-all duration-300"
            >
              Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 text-foreground font-semibold hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
            >
              View Our Work
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
