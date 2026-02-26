import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Megaphone, CalendarDays, Printer, Package, Palette, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Megaphone,
    title: "Advertising",
    desc: "From digital campaigns to outdoor billboards, we create advertising that captures attention and drives results. Our strategic approach ensures your message reaches the right audience at the right time.",
    features: ["Digital Campaigns", "Billboard & OOH", "Media Planning", "Brand Strategy"],
    color: "primary",
  },
  {
    icon: CalendarDays,
    title: "Event Management",
    desc: "We plan, coordinate, and execute events that leave lasting impressions. From corporate conferences to product launches, every detail is meticulously managed.",
    features: ["Corporate Events", "Product Launches", "Conferences", "Exhibitions"],
    color: "secondary",
  },
  {
    icon: Printer,
    title: "Printing Solutions",
    desc: "High-quality printing with cutting-edge technology. From business cards to large format prints, we deliver crisp, vibrant results every time.",
    features: ["Offset Printing", "Digital Printing", "Large Format", "Specialty Finishes"],
    color: "primary",
  },
  {
    icon: Package,
    title: "Packaging Design",
    desc: "Packaging that sells. We design containers, boxes, and bags that not only protect your product but make it irresistible on the shelf.",
    features: ["Product Packaging", "Gift Boxes", "Labels & Wraps", "Eco-Friendly Options"],
    color: "secondary",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Visual communication at its finest. Our designers transform ideas into compelling visuals that tell your brand's story across every medium.",
    features: ["Brand Identity", "Social Media", "Print Design", "UI/UX Design"],
    color: "primary",
  },
  {
    icon: Award,
    title: "Corporate Promotional Support",
    desc: "Comprehensive promotional solutions that boost brand visibility and engagement. From merchandise to campaign materials, we've got you covered.",
    features: ["Branded Merchandise", "Promotional Materials", "Campaign Support", "Trade Show Kits"],
    color: "secondary",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We understand your brand, goals, and audience deeply." },
  { step: "02", title: "Strategy", desc: "We craft a tailored plan aligned with your objectives." },
  { step: "03", title: "Creation", desc: "Our team brings the strategy to life with stunning execution." },
  { step: "04", title: "Delivery", desc: "We deliver on time, on budget, and beyond expectations." },
];

const Services = () => (
  <Layout>
    <section className="pt-32 pb-20 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Our Expertise</span>
        </motion.div>
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
      <div className="space-y-6">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.05}>
            <div className="glass-card rounded-xl p-8 md:p-10 hover-lift group relative overflow-hidden">
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-colors duration-700 ${
                service.color === "primary" ? "bg-primary/5 group-hover:bg-primary/10" : "bg-secondary/5 group-hover:bg-secondary/10"
              }`} />
              <div className="flex flex-col md:flex-row gap-8 items-start relative">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  service.color === "primary" ? "bg-primary/10 group-hover:bg-primary/20" : "bg-secondary/10 group-hover:bg-secondary/20"
                }`}>
                  <service.icon size={26} className={service.color === "primary" ? "text-primary" : "text-secondary"} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl">{service.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((f) => (
                      <span key={f} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-border/50 text-muted-foreground bg-card/50">
                        <CheckCircle size={12} className="text-primary" />
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

    {/* Process */}
    <section className="section-padding border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">How We Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Our <span className="text-gradient-green">Process</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <AnimatedSection key={p.step} delay={i * 0.12}>
              <div className="text-center relative">
                <span className="font-heading text-6xl font-bold text-primary/10">{p.step}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground -mt-4 mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-full h-px bg-border/30" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto text-center glass-card rounded-2xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Need a Custom <span className="text-gradient-brand">Solution</span>?
            </h2>
            <p className="text-muted-foreground mb-8">We tailor our services to meet your specific business goals.</p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(348,80%,48%,0.4)] transition-all duration-300"
            >
              Get a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  </Layout>
);

export default Services;
