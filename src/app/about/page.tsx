import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Linkedin, 
  ArrowRight, 
  Calculator, 
  BarChart, 
  Award, 
  Zap, 
  CheckCircle, 
  Users, 
  Handshake, 
  Compass, 
  FileText, 
  Settings, 
  TrendingUp, 
  Building2, 
  Smartphone, 
  Globe, 
  MapPin,
  Quote,
  Lightbulb,
  Shield,
  Eye
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About QuantiFi | Strategic Accounting & Fractional CFO Services',
  description: 'QuantiFi is an outsourced accounting and fractional CFO partner that simplifies finance and drives growth. Discover our mission, values, and leadership team.',
};

const coreValues = [
  {
    title: 'Professionalism',
    description: 'We set a high bar for quality and integrity in every engagement.',
    icon: Award
  },
  {
    title: 'Responsiveness',
    description: 'Clear communication and fast follow-through that you can count on.',
    icon: Zap
  },
  {
    title: 'Quality',
    description: 'Accurate, actionable deliverables that move your business forward.',
    icon: CheckCircle
  },
  {
    title: 'Transparency',
    description: 'Open, honest processes and reporting to keep you informed at every step.',
    icon: Eye
  }
];

const howWeWork = [
  {
    title: 'Partner with Your Team',
    description: 'We integrate with your internal staff to elevate collaboration and results.',
    icon: Handshake
  },
  {
    title: 'Liaison Role',
    description: 'We act as the bridge between your organization and external CPAs or auditors.',
    icon: Compass
  },
  {
    title: 'Full-Service Accounting',
    description: 'We handle everything from day-to-day bookkeeping to CFO-level strategy.',
    icon: FileText
  },
  {
    title: 'Efficiency Consulting',
    description: 'We streamline your systems and automate processes to improve accuracy.',
    icon: Settings
  }
];

const whyChooseUs = [
  {
    title: 'Adaptable Partnership',
    description: 'Support your current team or outsource fully. We scale our involvement as your business evolves.',
    icon: Users
  },
  {
    title: 'Consulting for Efficiency',
    description: 'Beyond basic bookkeeping, we identify process improvements and tech integrations.',
    icon: TrendingUp
  },
  {
    title: 'Industry Expertise',
    description: 'From RevPAR in hotels to job costing in construction, we speak your industry\'s language.',
    icon: Building2
  },
  {
    title: 'Flexible Technology',
    description: 'We work with your existing software stack to minimize disruption.',
    icon: Smartphone
  }
];

const leadership = [
  {
    name: 'Dhara Nakrani, MAcc',
    title: 'Founder & President',
    bio: 'A financial leader with deep expertise in accounting and business strategy, Dhara Nakrani founded QuantiFi with one mission: to transform how businesses experience accounting. With over a decade of experience across public and private sectors, she brings a forward-thinking approach that blends strategic financial insight with operational excellence.',
    detailedBio: 'Under her leadership, QuantiFi has grown into a trusted partner for businesses nationwide simplifying processes, strengthening financial control, and empowering smarter, data-driven decisions. Dhara\'s expertise lies in bridging the gap between accounting systems, technology, and business growth ensuring every client operates with clarity, precision, and purpose.',
    philosophy: 'She believes accounting should do more than report the past it should empower the future. Her focus remains on turning complex numbers into meaningful insights that drive measurable results and long-term success.',
    quote: 'Accounting isn\'t just about accuracy it\'s about alignment. When your numbers make sense, your business moves forward with confidence.',
    credentials: ['Master of Accounting (MAcc)', '15+ Years Experience', 'Strategic Financial Leadership'],
    linkedin: 'https://www.linkedin.com/in/dhara-nakrani-32ab5142/'
  },
  {
    name: 'Deep Patel, B.Com., F.C.A., L.L.B., CPA',
    title: 'Chief Operating Officer',
    bio: 'A finance professional with over 15 years of experience, Deep Patel leads QuantiFi\'s operational strategy with precision and foresight. His expertise spans accounting, auditing, valuation, cost segregation, and regulatory compliance backed by a comprehensive understanding of both U.S. and international financial standards.',
    detailedBio: 'As COO, Deep ensures every client engagement is executed with structure, transparency, and measurable impact. His advisory experience and holistic financial insight allow him to guide businesses through complex regulatory and operational challenges with clarity and confidence.',
    philosophy: 'Deep plays a pivotal role in strengthening client relationships and fostering long-term trust through thoughtful, results-driven leadership.',
    quote: 'True financial clarity isn\'t about perfection it\'s about purpose. Every number should guide, not confuse.',
    credentials: ['Certified Public Accountant (CPA)', 'Fellow Chartered Accountant (FCA)', '15+ Years Experience', 'International Standards Expert'],
    linkedin: null
  },
  {
    name: 'Richa Patel, MAcc',
    title: 'Senior Accounting Manager',
    bio: 'A results-driven accounting professional, Richa Patel brings over six years of experience in financial reporting, taxation, and audit support. Her expertise spans complex federal and multi-state tax returns, audit preparation, and ensuring full compliance with IRS and state regulations.',
    detailedBio: 'At QuantiFi, Richa bridges financial precision with strategic insight leading accounting operations that combine accuracy, timeliness, and forward-thinking analysis. Her approach goes beyond compliance; she focuses on turning numbers into meaningful insights that drive smarter, more confident business decisions.',
    philosophy: 'Known for her analytical mindset and dedication, Richa ensures every engagement reflects QuantiFi\'s commitment to quality, consistency, and measurable results.',
    quote: 'Behind every accurate number is a story of strategy, clarity, and progress.',
    credentials: ['CPA Candidate', 'Master of Accounting (MAcc)', '6+ Years Experience', 'Tax & Compliance Specialist'],
    linkedin: 'https://www.linkedin.com/in/richa-kotadia/'
  }
];

const states = [
  'California', 'Texas', 'Georgia', 'North Carolina', 'New York', 'Florida',
  'Arizona', 'Washington', 'Maryland', 'New Jersey'
];

export default function AboutPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-white dark:bg-black py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
                      Simplify Finance. <span className="whitespace-nowrap">Quantify Growth</span>. Empower Your Business.
                    </h1>
                    <p className="text-xl text-black dark:text-white leading-relaxed">
                      QuantiFi is more than an accounting provider. We&apos;re your strategic finance partner. We ensure your numbers work for you, not against you, delivering clarity, confidence, and control at every step.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="text-lg px-8 py-6 bg-[#0015ff] hover:bg-[#0012cc] text-white font-semibold">
                      <Link href="/contact">
                        Schedule a Free Consultation
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 text-black dark:text-white border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                      <Link href="/contact">Meet Our Experts</Link>
                    </Button>
                  </div>
                </div>
                
                {/* Right Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-full max-w-md h-80 bg-white dark:bg-black border-2 border-[#0015ff] rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-[#0015ff] rounded-full flex items-center justify-center mx-auto mb-6">
                          <BarChart className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-black dark:text-white mb-3">Strategic Financial Partnership</h3>
                        <p className="text-sm text-black dark:text-white leading-relaxed">
                          Empowering businesses through innovative accounting solutions and strategic financial guidance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-[#0015ff] rounded-xl">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-8">
                We Help You Quantify What Matters Most
              </h2>
              <div className="prose prose-lg max-w-none text-black dark:text-white space-y-6">
                <p className="text-lg leading-relaxed">
                  At QuantiFi, every number tells a story. Our name is inspired by the word &quot;quantify&quot; because we help businesses bring clarity, precision, and meaning to their financial data. We specialize in accounting and financial consulting for industries like construction, hospitality, restaurants, healthcare, retail, real estate, and start-ups.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you&apos;re managing job costs, tracking daily revenue, or consolidating multi-entity operations, we make sure your numbers work for you, not against you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Core Values */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                  Built on Trust, Powered by Insight
                </h2>
                <div className="bg-white dark:bg-black p-8 rounded-2xl border-l-4 border-[#0015ff] border-r-0 border-t-0 border-b-0 mb-12">
                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Our Mission</h3>
                  <p className="text-xl text-black dark:text-white italic">
                    To simplify finance, quantify growth, and empower businesses with clarity, confidence, and control.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map((value, index) => (
                  <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow border-2 border-black dark:border-white bg-white dark:bg-black">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-[#0015ff] rounded-2xl">
                        <value.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4">{value.title}</h3>
                    <p className="text-black dark:text-white leading-relaxed">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                  Flexible, Strategic, and Seamlessly Integrated
                </h2>
                <p className="text-xl text-black dark:text-white max-w-3xl mx-auto">
                  Whether you need a full-service accounting department or an expert to support your in-house team, QuantiFi adapts to your workflow with a model that fits your needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howWeWork.map((model, index) => (
                  <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-black dark:border-white bg-white dark:bg-black">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-[#0015ff] rounded-2xl">
                        <model.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4 text-center">{model.title}</h3>
                    <p className="text-black dark:text-white leading-relaxed text-center">{model.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose QuantiFi */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                  Not Just Accurate, Strategic
                </h2>
                <p className="text-xl text-black dark:text-white max-w-3xl mx-auto">
                  What sets QuantiFi apart is our ability to translate numbers into insights and insights into strategy. We don&apos;t just deliver accurate books; we deliver confidence and foresight.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {whyChooseUs.map((benefit, index) => (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-2 border-black dark:border-white bg-white dark:bg-black">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-[#0015ff] rounded-2xl">
                        <benefit.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4 text-center">{benefit.title}</h3>
                    <p className="text-black dark:text-white leading-relaxed text-center">{benefit.description}</p>
                  </Card>
                ))}
              </div>
              
              {/* Quote */}
              <div className="bg-white dark:bg-black p-8 rounded-2xl border-2 border-[#0015ff]">
                <div className="flex justify-center mb-6">
                  <Quote className="h-12 w-12 text-[#0015ff]" />
                </div>
                <blockquote className="text-2xl font-semibold text-black dark:text-white italic text-center leading-relaxed mb-6">
                  &quot;Accounting isn&apos;t just about accuracy, it&apos;s about alignment. When your numbers make sense, your business moves forward with confidence.&quot;
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-black dark:text-white">Dhara Nakrani, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Leadership */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 px-6 py-3 text-base font-medium bg-[#0015ff] text-white border-0">
                  Leadership That Listens and Leads
                </Badge>
                <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                  Meet Our Leadership
                </h2>
                <p className="text-xl text-black dark:text-white max-w-3xl mx-auto">
                  Our diverse team of financial experts brings decades of experience and a shared commitment to transforming how businesses approach accounting and financial management.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leadership.map((member, index) => (
                  <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-black dark:border-white bg-white dark:bg-black">
                      <div className="text-center mb-1">
                      <Badge variant="outline" className="mb-1 px-3 py-1 border-[#0015ff] text-[#0015ff]">
                          {member.title}
                        </Badge>
                      <h3 className="text-2xl font-bold text-black dark:text-white mb-1">
                          {member.name.split(',')[0]}
                        </h3>
                        <p className="text-sm text-black dark:text-white mb-1">
                          {member.name.split(',').slice(1).join(',').trim()}
                        </p>
                      </div>

                      <div className="mb-1">
                        <p className="text-xs text-black dark:text-white leading-relaxed mb-1">
                          {member.bio}
                        </p>
                        <p className="text-xs text-black dark:text-white leading-relaxed">
                          {member.detailedBio}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-1">
                        {member.credentials.map((credential, credIndex) => (
                          <Badge key={credIndex} className="py-1 px-2 text-xs bg-[#0015ff] text-white border-0">
                            {credential}
                          </Badge>
                        ))}
                      </div>

                    <Card className="p-4 bg-white dark:bg-black border-l-4 border-[#0015ff] border-r-0 border-t-0 border-b-0 mb-6">
                        <blockquote className="text-sm font-medium italic text-black dark:text-white leading-relaxed">
                        &quot;{member.quote}&quot;
                        </blockquote>
                        <div className="mt-2 text-xs text-black dark:text-white">
                          {member.name.split(',')[0]}
                        </div>
                      </Card>

                    {member.linkedin && (
                      <div className="flex justify-center">
                        <Button asChild variant="outline" size="sm" className="w-full border-2 border-black dark:border-white text-black dark:text-white hover:bg-[#0015ff] hover:text-white hover:border-[#0015ff] transition-colors">
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" />
                            Connect on LinkedIn
                          </a>
                        </Button>
                      </div>
                    )}
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy & Vision */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                  From Complexity to Confidence
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-black dark:text-white space-y-8 mb-16">
                <p className="text-lg leading-relaxed">
                  Dhara established QuantiFi to redefine accounting as a true partnership, not just an outsourced function. Her philosophy is built on collaboration, precision, and transparency. At its core, QuantiFi is designed for the modern business: nimble, strategic, and deeply invested in long-term success.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, QuantiFi partners with founders, operators, and management teams across the U.S., helping them streamline operations, gain financial control, and stay ready for what&apos;s next. We provide strategic accounting, financial consulting, and process optimization to clients across industries (construction, healthcare, hospitality, professional services, retail and more).
                </p>
                <p className="text-lg leading-relaxed">
                  Our team bridges the gap between financial systems, internal operations, and leadership strategy, ensuring every client has accurate data, meaningful insights, and a clear financial direction.
                  </p>
                </div>

              <div className="bg-white dark:bg-black p-8 rounded-2xl border-2 border-[#0015ff] mb-16">
                <div className="flex justify-center mb-6">
                  <Quote className="h-12 w-12 text-[#0015ff]" />
                        </div>
                <blockquote className="text-2xl font-semibold text-black dark:text-white italic text-center leading-relaxed mb-6">
                  &quot;Accounting isn&apos;t just about accuracy, it&apos;s about alignment with your goals, your growth, and your vision.&quot;
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-black dark:text-white">Dhara Nakrani, Founder</p>
                      </div>
                    </div>
                    
              <div className="bg-[#0015ff] text-white p-8 rounded-2xl">
                <div className="flex justify-center mb-6">
                  <Lightbulb className="h-12 w-12 text-white" />
                  </div>
                <blockquote className="text-2xl font-semibold italic text-center leading-relaxed mb-6">
                  &quot;For me, accounting isn&apos;t just about precision, it&apos;s about partnership. When clarity meets purpose, growth becomes inevitable.&quot;
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold">Dhara Nakrani</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nationwide Reach */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-[#0015ff] rounded-xl">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                  Nationwide Reach. Local Insight.
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6 text-lg text-black dark:text-white leading-relaxed">
                  <p>
                    We lead a nationwide team that delivers clarity and control to clients across the country. Whether we&apos;re supporting an in-house accounting department or managing a fully outsourced finance function, QuantiFi operates as an extension of your team, connecting people, processes, and technology under one cohesive system.
                  </p>
                  <p>
                    Despite our national reach, we maintain a local touch. Our experts combine broad experience with region-specific knowledge (sales tax nuances, state regulations, industry benchmarks) to provide guidance tailored to your market.
                  </p>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-full max-w-md h-80 bg-white dark:bg-black border-2 border-[#0015ff] rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-[#0015ff] rounded-full flex items-center justify-center mx-auto mb-6">
                          <MapPin className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-black dark:text-white mb-3">Coast-to-Coast Coverage</h3>
                        <p className="text-sm text-black dark:text-white leading-relaxed">
                          Serving clients nationwide with local expertise and global insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* States Marquee */}
              <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-6 rounded-xl">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#0015ff] mr-2" />
                  <span className="text-sm font-medium text-black dark:text-white">Serving Clients In</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {states.map((state, index) => (
                    <Badge key={index} variant="outline" className="px-4 py-2 border-2 border-[#0015ff] text-[#0015ff]">
                      {state}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-24 bg-[#0015ff] text-white">
          <div className="container-standard section-gutter text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let&apos;s Talk Strategy.
            </h2>
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                Start with a conversation, end with clarity. Whether you need a full accounting partner or targeted financial guidance, we&apos;re ready to help you operate with confidence and control.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="text-xl px-12 py-8 bg-white text-[#0015ff] hover:bg-black hover:text-white font-bold">
                  <Link href="/contact">
                    Book a Free Consultation
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-xl px-8 py-8 border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0015ff] font-semibold">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
