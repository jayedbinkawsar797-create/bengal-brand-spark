import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-card/30">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="mb-4">
              <span className="font-heading text-3xl font-bold text-gradient-brand">MIND</span>
              <p className="font-heading text-xs tracking-[0.3em] text-muted-foreground uppercase mt-1">Communication</p>
            </div>
            <p className="text-sm text-muted-foreground italic mb-6">be seen, be remembered</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bangladesh's premier creative agency delivering bold advertising, stunning designs, and unforgettable events since 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-5">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  {l}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-5">Services</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {["Advertising", "Event Management", "Printing Solution", "Packaging Design", "Graphic Design", "Corporate Promotions"].map((s) => (
                <Link key={s} to="/services" className="hover:text-primary transition-colors">{s}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-5">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <a href="tel:+8801798823797" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                +88-01798823797
              </a>
              <a href="mailto:jayed@mindcommunicationbd.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={14} className="text-primary" />
                </div>
                <span className="break-all">jayed@mindcommunicationbd.com</span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span>14/1, BTI Emporium, Shyamoli, Mirpur Road, Dhaka-1207</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Mind Communication. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/8801798823797" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">WhatsApp</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
