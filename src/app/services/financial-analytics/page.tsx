import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import FinancialAnalyticsContent from './FinancialAnalyticsContent';

export const metadata: Metadata = {
  title: 'Financial Analytics & Reporting | QuantiFi',
  description: 'QuantiFi delivers manual, CPA-reviewed financial analysis and reporting — variance, cash flow, and performance insights tailored for your business.',
};

export default function FinancialAnalyticsPage() {
  return (
    <MarketingLayout>
      <FinancialAnalyticsContent />
    </MarketingLayout>
  );
}
