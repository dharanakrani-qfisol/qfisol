import { Hero } from '@/components/sections/Hero';
import { PainPoints } from '@/components/sections/PainPoints';
import { HowWeWorkEnhanced } from '@/components/sections/HowWeWorkEnhanced';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import FAQSection from '@/components/sections/FAQSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <HowWeWorkEnhanced />
        <ServicesSection />
        <IndustriesGrid />
        <TestimonialSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}