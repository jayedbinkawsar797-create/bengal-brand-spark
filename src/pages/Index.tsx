import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsSection from "@/components/sections/StatsSection";
import ParallaxBreak from "@/components/sections/ParallaxBreak";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedWork from "@/components/sections/FeaturedWork";
import HorizontalShowcase from "@/components/sections/HorizontalShowcase";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ClientLogos from "@/components/sections/ClientLogos";
import CTASection from "@/components/sections/CTASection";
import portfolio4 from "@/assets/portfolio-4.jpg";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MarqueeStrip />
      <ServicesGrid />
      <StatsSection />
      <ParallaxBreak
        image={portfolio4}
        quote="We don't just build brands — we build legacies that inspire generations"
        author="Mind Communication"
      />
      <WhyChooseUs />
      <FeaturedWork />
      <HorizontalShowcase />
      <TestimonialsSection />
      <FAQSection />
      <ClientLogos />
      <CTASection />
    </Layout>
  );
};

export default Index;
