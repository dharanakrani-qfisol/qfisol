import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface MarketingLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

export function MarketingLayout({ 
  children, 
  showNav = true, 
  showFooter = true 
}: MarketingLayoutProps) {
  return (
    <>
      {showNav && <Navbar />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
}

