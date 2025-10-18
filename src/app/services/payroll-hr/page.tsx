import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import PayrollHRContent from './PayrollHRContent';

export const metadata: Metadata = {
  title: 'Payroll & HR Support Services | QuantiFi',
  description: 'QuantiFi provides secure, accurate, and compliant payroll & HR support for small businesses nationwide. Partner with our experts to simplify payroll today.',
};

export default function PayrollHRPage() {
  return (
    <MarketingLayout>
      <PayrollHRContent />
    </MarketingLayout>
  );
}
