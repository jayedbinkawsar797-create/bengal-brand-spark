import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-heading text-2xl font-bold text-gradient-brand">MIND</span>
              <p className="font-heading text-xs tracking-[0.3em] text-muted-foreground uppercase">Communication</p>
            </div>
            <p className="text-sm text-muted-foreground italic">be seen, be remembered</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((l) => (
                <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>Advertising</span>
              <span>Event Management</span>
              <span>Printing Solution</span>
              <span>Packaging</span>
              <span>Graphic Design</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+8801798823797" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} /> +88-01798823797
              </a>
              <a href="mailto:jayed@mindcommunicationbd.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} /> jayed@mindcommunicationbd.com
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" /> 14/1, BTI Emporium, Shyamoli, Mirpur Road, Dhaka-1207
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Mind Communication. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
