import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  { name: 'Outsourced Accounting', href: '/services/outsourced-accounting' },
  { name: 'Fractional CFO', href: '/services/fractional-cfo' },
  { name: 'Tax Services', href: '/services/tax' },
  { name: 'Controller Services', href: '/services/controller' },
];

const industries = [
  { name: 'Construction', href: '/industries/construction' },
  { name: 'CPA Firms', href: '/industries/cpa-firms' },
  { name: 'Dental', href: '/industries/dental' },
  { name: 'Hospitality', href: '/industries/hospitality' },
  { name: 'Medical', href: '/industries/medical' },
  { name: 'Retail', href: '/industries/retail' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Process', href: '/process' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Resources', href: '/resources' },
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
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-bold text-lg mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link
                    href={industry.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@quantifi.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="mt-4">
              <Button asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
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
            © 2024 Quantifi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
