import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import TaxPreparationContent from './TaxPreparationContent';

export const metadata: Metadata = {
  title: 'Tax Preparation & Compliance Services | QuantiFi',
  description: 'QuantiFi provides business and personal tax review, sales and use tax compliance, and CPA coordination. Stay organized, compliant, and ready for every tax season.',
};

export default function TaxPreparationPage() {
  return (
    <MarketingLayout>
      <TaxPreparationContent />
    </MarketingLayout>
  );
}
