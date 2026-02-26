const MarqueeStrip = () => (
  <div className="border-y border-border/30 overflow-hidden py-5 bg-card/30">
    <div className="marquee whitespace-nowrap">
      {[...Array(3)].map((_, i) => (
        <span key={i} className="inline-block">
          {["ADVERTISING", "EVENT MANAGEMENT", "PRINTING", "PACKAGING", "GRAPHIC DESIGN", "BRANDING", "CORPORATE PROMOTIONS"].map((s) => (
            <span key={s} className="mx-8 text-sm font-heading tracking-[0.3em] text-muted-foreground/70">
              {s} <span className="text-primary mx-4">✦</span>
            </span>
          ))}
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeStrip;
