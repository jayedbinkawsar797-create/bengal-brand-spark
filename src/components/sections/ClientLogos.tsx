import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const clients = ["BRAC", "Walton", "Square", "ACI", "Pran", "Akij", "City Group", "Apex"];

const ClientLogos = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Trusted By Leading Brands</p>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring" }}
              whileHover={{ scale: 1.1, color: "hsl(348, 80%, 48%)" }}
              className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/25 hover:text-muted-foreground/50 transition-colors duration-500 cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ClientLogos;
