import { Building2, ChefHat, Heart, Factory, UserCheck, Calculator, DollarSign, TrendingUp, Lightbulb, Settings, Users, Home, Briefcase, FileText, BarChart3, Info, Phone } from 'lucide-react';

export const navigationItems = [
  { 
    title: 'Home', 
    href: '/', 
    type: 'link',
    icon: Home
  },
  { 
    title: 'Industries', 
    href: '#', 
    type: 'submenu',
    icon: Building2,
    submenu: [
      {
        title: 'Construction',
        href: '/industries/construction',
        description: 'Streamline construction projects with professional accounting',
        icon: Building2,
      },
      {
        title: 'Hospitality', 
        href: '/industries/hospitality',
        description: 'Optimize hospitality operations with expert financial management',
        icon: Heart,
      },
      {
        title: 'Restaurants',
        href: '/industries/restaurants', 
        description: 'Boost restaurant profitability through strategic accounting',
        icon: ChefHat,
      },
      {
        title: 'Healthcare',
        href: '/industries/healthcare',
        description: 'Navigate complex healthcare compliance and reporting',
        icon: Heart,
      },
      {
        title: 'Manufacturing/Retail',
        href: '/industries/manufacturing',
        description: 'Optimize supply chains and retail operations financially',
        icon: Factory,
      },
      {
        title: 'CPA & Pro Services',
        href: '/industries/cpa-professional',
        description: 'Enhance accounting workflow for professional services',
        icon: UserCheck,
      }
    ]
  },
  { 
    title: 'Services', 
    href: '#', 
    type: 'submenu',
    icon: Briefcase,
    submenu: [
      {
        title: 'Core Accounting',
        href: '/services/core-accounting',
        description: 'Complete bookkeeping and transaction management',
        icon: Calculator,
      },
      {
        title: 'Tax',
        href: '/services/tax',
        description: 'Comprehensive tax preparation and planning services',
        icon: DollarSign,
      },
      {
        title: 'FP&A',
        href: '/services/financial-planning',
        description: 'Financial planning and analysis for business growth',
        icon: TrendingUp,
      },
      {
        title: 'Advisory',
        href: '/services/advisory',
        description: 'Strategic business consulting and financial guidance',
        icon: Lightbulb,
      },
      {
        title: 'Systems & Tech',
        href: '/services/systems-tech',
        description: 'Technology integration and systems optimization',
        icon: Settings,
      },
      {
        title: 'PFS',
        href: '/services/pfs',
        description: 'Personal financial services and wealth management',
        icon: Users,
      }
    ]
  },
  { 
    title: 'Process', 
    href: '/process', 
    type: 'link',
    icon: FileText
  },
  { 
    title: 'Case Studies', 
    href: '/case-studies', 
    type: 'link',
    icon: BarChart3
  },
  { 
    title: 'About', 
    href: '/about', 
    type: 'link',
    icon: Info
  },
  { 
    title: 'Contact Us', 
    href: '/contact', 
    type: 'link',
    icon: Phone
  }
];





