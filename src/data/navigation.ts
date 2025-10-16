import { Building2, Heart, Factory, UserCheck, Calculator, DollarSign, TrendingUp, Lightbulb, Settings, Users, Home, Briefcase, BarChart3, Info, Phone, BookOpen, FileText } from 'lucide-react';

export const navigationItems = [
  { 
    title: 'Home', 
    href: '/', 
    type: 'link',
    icon: Home
  },
  { 
    title: 'Industries', 
    href: '/industries', 
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
        title: 'CPA Firms',
        href: '#',
        description: 'Enhance accounting workflow for professional services',
        icon: UserCheck,
      },
      {
        title: 'Healthcare',
        href: '#',
        description: 'Navigate complex healthcare compliance and reporting',
        icon: Heart,
      },
      {
        title: 'Hospitality', 
        href: '#',
        description: 'Optimize hospitality operations with expert financial management',
        icon: Heart,
      },
      {
        title: 'Professional Services',
        href: '#', 
        description: 'Strategic financial ops for agencies, legal, and consulting',
        icon: UserCheck,
      },
      {
        title: 'Manufacturing/Retail',
        href: '#',
        description: 'Optimize supply chains and retail operations financially',
        icon: Factory,
      },
    ]
  },
  { 
    title: 'Services', 
    href: '/services', 
    type: 'submenu',
    icon: Briefcase,
    submenu: [
      {
        title: 'Outsourced Accounting',
        href: '/services/outsourced-accounting',
        description: 'Complete bookkeeping and transaction management',
        icon: Calculator,
      },
      {
        title: 'Tax',
        href: '#',
        description: 'Comprehensive tax preparation and planning services',
        icon: DollarSign,
      },
      {
        title: 'FP&A',
        href: '#',
        description: 'Financial planning and analysis for business growth',
        icon: TrendingUp,
      },
      {
        title: 'Advisory',
        href: '#',
        description: 'Strategic business consulting and financial guidance',
        icon: Lightbulb,
      },
      {
        title: 'Systems & Tech',
        href: '#',
        description: 'Technology integration and systems optimization',
        icon: Settings,
      },
      {
        title: 'PFS',
        href: '#',
        description: 'Personal financial services and wealth management',
        icon: Users,
      }
    ]
  },
  { 
    title: 'Resources', 
    href: '/resources', 
    type: 'submenu',
    icon: BookOpen,
    submenu: [
      {
        title: 'Case Studies',
        href: '/case-studies',
        description: 'Real-world success stories and client transformations',
        icon: BarChart3,
      },
      {
        title: 'Blogs',
        href: '#',
        description: 'Insights, tips, and industry best practices',
        icon: FileText,
      }
    ]
  },
  { 
    title: 'About', 
    href: '/about', 
    type: 'link',
    icon: Info
  },
  { 
    title: 'Contact', 
    href: '/contact', 
    type: 'link',
    icon: Phone
  }
];





