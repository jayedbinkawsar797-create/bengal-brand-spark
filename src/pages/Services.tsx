import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Megaphone, CalendarDays, Printer, Package, Palette, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Megaphone,
    title: "Advertising",
    desc: "From digital campaigns to outdoor billboards, we create advertising that captures attention and drives results. Our strategic approach ensures your message reaches the right audience at the right time.",
    features: ["Digital Campaigns", "Billboard & OOH", "Media Planning", "Brand Strategy"],
  },
  {
    icon: CalendarDays,
    title: "Event Management",
    desc: "We plan, coordinate, and execute events that leave lasting impressions. From corporate conferences to product launches, every detail is meticulously managed.",
    features: ["Corporate Events", "Product Launches", "Conferences", "Exhibitions"],
  },
  {
    icon: Printer,
    title: "Printing Solutions",
    desc: "High-quality printing with cutting-edge technology. From business cards to large format prints, we deliver crisp, vibrant results every time.",
    features: ["Offset Printing", "Digital Printing", "Large Format", "Specialty Finishes"],
  },
  {
    icon: Package,
    title: "Packaging Design",
    desc: "Packaging that sells. We design containers, boxes, and bags that not only protect your product but make it irresistible on the shelf.",
    features: ["Product Packaging", "Gift Boxes", "Labels & Wraps", "Eco-Friendly Options"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Visual communication at its finest. Our designers transform ideas into compelling visuals that tell your brand's story across every medium.",
    features: ["Brand Identity", "Social Media", "Print Design", "UI/UX Design"],
  },
  {
    icon: Award,
    title: "Corporate Promotional Support",
    desc: "Comprehensive promotional solutions that boost brand visibility and engagement. From merchandise to campaign materials, we've got you covered.",
    features: ["Branded Merchandise", "Promotional Materials", "Campaign Support", "Trade Show Kits"],
  },
];

const Services = () => (
  <Layout>
    <section className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-primary mb-4"
        >
          Our Services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          What We <span className="text-gradient-brand">Deliver</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          End-to-end creative solutions tailored to elevate your brand presence in Bangladesh and beyond.
        </motion.p>
      </div>
    </section>

    <section className="section-padding max-w-7xl mx-auto">
      <div className="space-y-8">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.05}>
            <div className="glass-card rounded-xl p-8 md:p-10 hover-lift group">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={26} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto text-center glass-card rounded-2xl p-12 md:p-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Need a Custom <span className="text-gradient-brand">Solution</span>?
          </h2>
          <p className="text-muted-foreground mb-8">We tailor our services to meet your specific business goals.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  </Layout>
);

export default Services;
