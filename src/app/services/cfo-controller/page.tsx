import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import CFOControllerContent from './CFOControllerContent';

export const metadata: Metadata = {
  title: 'CFO & Controller Services | QuantiFi',
  description: 'Gain expert financial oversight with QuantiFi\'s virtual CFO & Controller services. Scalable strategy, GAAP reporting, and cash flow clarity for growing businesses.',
};

export default function CFOControllerPage() {
  return (
    <MarketingLayout>
      <CFOControllerContent />
    </MarketingLayout>
  );
}
