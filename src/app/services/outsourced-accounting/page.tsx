import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import OutsourcedAccountingContent from './OutsourcedAccountingContent';

export const metadata: Metadata = {
  title: 'Outsourced Bookkeeping & Accounting Services | QuantiFi',
  description: 'QuantiFi provides outsourced bookkeeping and virtual accounting services nationwide. Streamline your finances with expert, GAAP-compliant support.',
};

export default function OutsourcedAccountingPage() {
  return (
    <MarketingLayout>
      <OutsourcedAccountingContent />
    </MarketingLayout>
  );
}