import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Specialized accounting solutions for Construction, CPA Firms, Dental, Healthcare, and more industries.',
};

export default function IndustriesPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        <div className="container-standard section-gutter py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Industries We Serve
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Explore industry-specific solutions tailored to your accounting and advisory needs.
          </p>
          
          {/* Industries grid will be populated */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border rounded-lg">
              <h2>More industries coming</h2>
            </div>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}



















