import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';

// Dynamic imports for below-the-fold components with SSR disabled for better performance
const PainPoints = dynamic(() => import('@/components/sections/PainPoints').then(mod => ({ default: mod.PainPoints })), { ssr: false });
const HowWeWorkEnhanced = dynamic(() => import('@/components/sections/HowWeWorkEnhanced').then(mod => ({ default: mod.HowWeWorkEnhanced })), { ssr: false });
const IndustriesGrid = dynamic(() => import('@/components/sections/IndustriesGrid').then(mod => ({ default: mod.IndustriesGrid })), { ssr: false });
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection').then(mod => ({ default: mod.ServicesSection })), { ssr: false });
const TrustedNationwide = dynamic(() => import('@/components/sections/TrustedNationwide').then(mod => ({ default: mod.TrustedNationwide })), { ssr: false });
const TestimonialSection = dynamic(() => import('@/components/sections/TestimonialSection').then(mod => ({ default: mod.TestimonialSection })), { ssr: false });
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), { ssr: false });
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA').then(mod => ({ default: mod.FinalCTA })), { ssr: false });
const LatestArticles = dynamic(() => import('@/components/sections/LatestArticles').then(mod => ({ default: mod.LatestArticles })), { ssr: false });

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
        <TrustedNationwide />
        <TestimonialSection />
        <FAQSection />
        <FinalCTA />
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
}