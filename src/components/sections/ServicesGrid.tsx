import { Link } from "react-router-dom";
import { ArrowRight, Megaphone, CalendarDays, Printer, Package, Palette, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: Megaphone, title: "Advertising", desc: "Strategic campaigns that cut through the noise and reach your audience." },
  { icon: CalendarDays, title: "Event Management", desc: "End-to-end event planning that creates unforgettable experiences." },
  { icon: Printer, title: "Printing Solutions", desc: "High-quality print materials that elevate your brand presence." },
  { icon: Package, title: "Packaging Design", desc: "Premium packaging that makes your products stand out on any shelf." },
  { icon: Palette, title: "Graphic Design", desc: "Visual storytelling that communicates your brand's essence." },
  { icon: Award, title: "Corporate Promotions", desc: "Promotional strategies that drive engagement and brand loyalty." },
];

const ServicesGrid = () => (
  <section className="section-padding max-w-7xl mx-auto">
    <AnimatedSection>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">What We Do</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Services That <span className="text-gradient-brand">Transform</span>
          </h2>
        </div>
        <Link to="/services" className="hidden md:flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity mt-4 md:mt-0">
          All Services <ArrowRight size={16} />
        </Link>
      </div>
    </AnimatedSection>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <AnimatedSection key={service.title} delay={i * 0.08}>
          <Link to="/services" className="block h-full">
            <div className="glass-card rounded-xl p-8 hover-lift group cursor-pointer h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </div>
          </Link>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ServicesGrid;
