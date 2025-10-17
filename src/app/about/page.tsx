'use client';

import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Component as GlobeComponent } from '@/components/globe';

const leadership = [
  {
    name: 'Dhara Nakrani, MAcc',
    title: 'Founder & President',
    bio: 'A financial leader with deep expertise in accounting and business strategy, Dhara Nakrani founded QuantiFi (QFISOL) with one mission to transform how businesses experience accounting. With over a decade of experience across both public and private sectors, she brings a forward-thinking approach that blends strategic financial insight with operational excellence.',
    detailedBio: 'Under her leadership, QuantiFi has grown into a trusted partner for businesses nationwide simplifying processes, strengthening financial control, and empowering smarter, data-driven decisions. Dhara\'s expertise lies in bridging the gap between accounting systems, technology, and business growth ensuring every client operates with clarity, precision, and purpose.',
    philosophy: 'She believes accounting should do more than report the past it should empower the future. Her focus remains on turning complex numbers into meaningful insights that drive measurable results and long-term success.',
    quote: 'Accounting isn\'t just about accuracy it\'s about alignment. When your numbers make sense, your business moves forward with confidence.',
    credentials: ['Master of Accounting (MAcc)', '10+ Years Experience', 'Strategic Financial Leadership'],
    linkedin: 'https://linkedin.com/in/dhara-nakrani'
  },
  {
    name: 'Deep Patel, B.Com., F.C.A., L.L.B., CPA',
    title: 'Chief Operating Officer',
    bio: 'A professional with over 15 years of experience, Deep Patel leads QuantiFi\'s operational strategy with precision and foresight. His expertise spans accounting, auditing, valuation, cost segregation, and regulatory compliance backed by a comprehensive understanding of both U.S. and international financial standards.',
    detailedBio: 'As QuantiFi\'s Chief Operating Officer, Deep ensures every client engagement is executed with structure, transparency, and measurable impact. His advisory experience and holistic financial insight allow him to guide businesses through complex regulatory and operational challenges with clarity and confidence.',
    philosophy: 'Deep plays a pivotal role in strengthening client relationships and fostering long-term trust through thoughtful, results-driven leadership.',
    quote: 'True financial clarity isn\'t about perfection it\'s about purpose. Every number should guide, not confuse.',
    credentials: ['CPA Certified', '15+ Years Experience', 'International Standards Expert'],
    linkedin: 'https://linkedin.com/in/deep-patel'
  },
  {
    name: 'Richa Patel, MAcc, CPA Candidate',
    title: 'Senior Accounting Manager',
    bio: 'A results-driven accounting professional, Richa Patel brings over six years of experience in financial reporting, taxation, and audit support. Her expertise spans complex federal and multi-state tax returns, audit preparation, and ensuring full compliance with IRS and state regulations.',
    detailedBio: 'At QuantiFi, Richa bridges financial precision with strategic insight leading accounting operations that combine accuracy, timeliness, and forward-thinking analysis. Her approach goes beyond compliance; she focuses on turning numbers into meaningful insights that drive smarter, more confident business decisions.',
    philosophy: 'Known for her analytical mindset and leadership, Richa ensures every engagement reflects QuantiFi\'s commitment to quality, consistency, and measurable results.',
    quote: 'Behind every accurate number is a story of strategy, clarity, and progress.',
    credentials: ['MAcc Certified', '6+ Years Experience', 'Tax & Compliance Expert'],
    linkedin: 'https://linkedin.com/in/richa-patel'
  }
];

export default function AboutPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">

        {/* Leadership */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 bg-background"
        >
          <div className="container-standard section-gutter">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-quantifi-primary text-white">Leadership Team</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Meet Our Leadership
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our diverse team of financial experts brings decades of experience and a shared commitment to transforming how businesses approach accounting and financial management.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leadership.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group"
                  >
                    <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 bg-gradient-to-br from-white to-blue-50/20 dark:from-background dark:to-blue-950/5">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <Badge variant="outline" className="text-xs mb-4 px-3 py-1">
                          {member.title}
                        </Badge>
                        
                        {/* Name */}
                        <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                          {member.name.split(',')[0]}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                          {member.name.split(',').slice(1).join(',').trim()}
                        </p>
                      </div>

                      {/* Bio */}
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {member.bio}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {member.detailedBio}
                        </p>
                      </div>

                      {/* Credentials */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.credentials.map((credential, credIndex) => (
                          <Badge key={credIndex} variant="secondary" className="py-1 px-2 text-xs">
                            {credential}
                          </Badge>
                        ))}
                      </div>

                      {/* Quote */}
                      <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-l-4 border-primary mb-6">
                        <blockquote className="text-sm font-medium italic text-foreground leading-relaxed">
                          &quot;{member.quote}&quot;
                        </blockquote>
                        <div className="mt-2 text-xs text-muted-foreground">
                          {member.name.split(',')[0]}
                        </div>
                      </Card>

                      {/* LinkedIn Button */}
                      <div className="flex justify-center">
                        <Button asChild variant="outline" size="sm" className="w-full hover:bg-primary hover:text-white transition-colors">
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" />
                            Connect on LinkedIn
                          </a>
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Leading with Purpose */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/20 dark:via-background dark:to-indigo-950/20"
        >
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-quantifi-primary text-white">Our Philosophy</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Leading with Purpose
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Dhara established QuantiFi to redefine accounting as a true partnership not an outsourced function.
                    Her philosophy is built on collaboration, precision, and transparency.
                    At its core, QuantiFi is designed for the modern business: nimble, strategic, and deeply invested in long-term success.
                  </p>
                  <p>
                    Today, QuantiFi partners with founders, operators, and management teams across the U.S., helping them streamline operations, gain financial control, and stay ready for what&apos;s next.
                  </p>
                </div>

                {/* Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-quantifi-primary rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Strategic Vision</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Empowering businesses through innovative accounting solutions and strategic financial guidance.
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-quantifi-primary rounded-full opacity-20"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-indigo-500 rounded-full opacity-10"></div>
                    <div className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-400 rounded-full opacity-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Expertise That Creates Impact */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-background"
        >
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <Badge className="mb-4 bg-quantifi-primary text-white">Expertise</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Expertise That Creates Impact
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Under Dhara&apos;s leadership, QuantiFi provides strategic accounting, financial consulting, and process optimization to clients across multiple industries including construction, healthcare, hospitality, retail, and professional services.
                    </p>
                    <p>
                      She and her team bridge the gap between financial systems, internal operations, and leadership strategy ensuring every client has accurate data, meaningful insights, and a clear financial direction.
                    </p>
                  </div>
                </div>
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-none shadow-xl">
                  <div className="relative">
                    <svg className="absolute -top-4 -left-2 w-12 h-12 text-primary/20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.7-1.3l.3.3v1l4.5 4.5 1.5-1.5-4.5-4.5h-1l-.3-.3c.8-1 1.3-2.3 1.3-3.7 0-3.3-2.7-6-6-6z"/>
                    </svg>
                    <blockquote className="text-xl md:text-2xl font-semibold text-foreground italic leading-relaxed pt-8">
                      &quot;Accounting isn&apos;t just about accuracy it&apos;s about alignment with your goals, your growth, and your vision.&quot;
                    </blockquote>
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">Dhara Nakrani</p>
                      <p className="text-sm text-muted-foreground">Founder & Principal</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Nationwide Reach */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-muted/30"
        >
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-quantifi-primary text-white">Our Reach</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Nationwide Reach, Local Insight
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We lead a nationwide team that delivers clarity and control to clients across the country.
                    Whether supporting an in-house accounting department or managing a full accounting function, QuantiFi operates as an extension of the client&apos;s team — connecting people, processes, and technology under one cohesive system.
                  </p>
                </div>

                {/* Animated Globe */}
                <div className="flex justify-center lg:justify-start">
                  <div className="w-full max-w-md">
                    <GlobeComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Beyond the Numbers */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-background"
        >
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3">
                    <Badge className="mb-4 bg-quantifi-primary text-white">Our Approach</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Beyond the Numbers
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      As an entrepreneur herself, Dhara understands that numbers alone don&apos;t tell the full story — insight does.
                      Her leadership philosophy centers on empowerment through clarity, helping businesses see their financials not as a burden but as a strategic advantage.
                    </p>
                    <p>
                      At QuantiFi, every relationship is built on trust, transparency, and measurable results.
                      Dhara&apos;s commitment goes beyond clean books — she&apos;s dedicated to helping every client turn financial complexity into confidence and growth.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    <Card className="p-6 border-l-4 border-blue-500">
                      <h3 className="font-bold text-lg mb-2">Trust</h3>
                      <p className="text-sm text-muted-foreground">Built on integrity and reliability</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-indigo-500">
                      <h3 className="font-bold text-lg mb-2">Transparency</h3>
                      <p className="text-sm text-muted-foreground">Clear communication at every step</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-purple-500">
                      <h3 className="font-bold text-lg mb-2">Results</h3>
                      <p className="text-sm text-muted-foreground">Measurable impact on your growth</p>
                  </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Why Behind QuantiFi */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
        >
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                The Why Behind QuantiFi
            </h2>
              <div className="space-y-6 text-lg leading-relaxed opacity-95 mb-12">
                <p>
                  Dhara founded QuantiFi with a single purpose — to make financial management simpler, smarter, and strategic.
                  She believes accounting should empower decisions, not delay them.
                  Every process, system, and partnership at QuantiFi is designed to help clients move forward — confidently, efficiently, and sustainably.
                </p>
              </div>
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl">
                <blockquote className="text-xl md:text-2xl font-semibold italic leading-relaxed">
                  &quot;For me, accounting isn&apos;t just about precision — it&apos;s about partnership. When clarity meets purpose, growth becomes inevitable.&quot;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="font-semibold">Dhara Nakrani</p>
                  <p className="text-sm opacity-90">Founder & Principal, QuantiFi</p>
                </div>
              </Card>
            </div>
          </div>
        </motion.section>
      </div>
    </MarketingLayout>
  );
}
