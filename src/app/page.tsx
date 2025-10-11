import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { PainPoints } from '@/components/sections/PainPoints';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
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
        <HowWeWork />
        <IndustriesGrid />
        <ServicesSection />
        <TestimonialSection />
        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}