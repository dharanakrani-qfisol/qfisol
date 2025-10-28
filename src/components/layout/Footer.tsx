import Link from 'next/link';
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Calculator,
  TrendingUp,
  FileText,
  Users,
  Settings,
  BarChart3,
  HardHat,
  UtensilsCrossed,
  ShoppingCart,
  HeartPulse,
  Rocket,
  Home,
  Info,
  Briefcase,
  BookOpen,
  MessageCircle
} from 'lucide-react';
import { BookCallButton } from '@/components/ui/book-call-button';

const services = [
  { name: 'Outsourced Bookkeeping & Accounting', href: '/services/outsourced-accounting', icon: Calculator },
  { name: 'Controller & CFO Services', href: '/services/cfo-controller', icon: TrendingUp },
  { name: 'Tax Preparation & Compliance', href: '/services/tax-preparation-compliance', icon: FileText },
  { name: 'Payroll & HR Support', href: '/services/payroll-hr', icon: Users },
  { name: 'Systems Integration & Tech Consulting', href: '/services/systems-integration', icon: Settings },
  { name: 'Financial Analytics & Reporting', href: '/services/financial-analytics', icon: BarChart3 },
];

const industries = [
  { name: 'Construction & Contracting', href: '/industries/construction', icon: HardHat },
  { name: 'Hospitality & Restaurant', href: '/industries/hospitality', icon: UtensilsCrossed },
  { name: 'Retail & E-Commerce', href: '/industries/retail-ecommerce', icon: ShoppingCart },
  { name: 'Healthcare & Medical Practice', href: '/industries/healthcare', icon: HeartPulse },
  { name: 'Startup & Emerging Business', href: '/industries/startups', icon: Rocket },
  { name: 'Real Estate & Property Management', href: '/industries/real-estate', icon: Home },
];

const company = [
  { name: 'About Us', href: '/about', icon: Info },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Blogs', href: '/resources/blogs', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-standard section-gutter py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Icon className="h-4 w-4 flex-shrink-0 group-hover:text-[#0015ff] transition-colors" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-bold text-lg mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <li key={industry.name}>
                    <Link
                      href={industry.href}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Icon className="h-4 w-4 flex-shrink-0 group-hover:text-[#0015ff] transition-colors" />
                      <span>{industry.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Icon className="h-4 w-4 flex-shrink-0 group-hover:text-[#0015ff] transition-colors" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@qfisol.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (301) 659-5995</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p>Atlanta, Georgia</p>
                  <p>Los Angeles, California</p>
                  <p>Dallas, Texas</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <BookCallButton>Book a Call</BookCallButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links and Legal */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-4">
            © 2024 QuantiFi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
