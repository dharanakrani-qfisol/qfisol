// Systems Integration page
import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import SystemsIntegrationContent from './SystemsIntegrationContent';

export const metadata: Metadata = {
  title: 'Systems Integration & Technology Consulting | QuantiFi',
  description: 'QuantiFi helps businesses migrate and integrate accounting systems like QuickBooks, Xero, and NetSuite — from demo to go-live with complete confidence.',
};

export default function SystemsIntegrationPage() {
  return (
    <MarketingLayout>
      <SystemsIntegrationContent />
    </MarketingLayout>
  );
}
