'use client';

import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const leadership = {
  name: 'Dhara Nakrani, MAcc',
  title: 'Principal & Founder',
  image: '/images/dhara-nakrani.jpg',
  bio: 'Dhara founded Quantifi to bridge the gap between traditional accounting and modern business needs. With 15+ years in public and private accounting, she specializes in helping growth-stage companies establish robust financial systems. Her MAcc credentials combined with industry experience across construction and professional services make her uniquely qualified to lead your financial transformation.',
  credentials: ['Master of Accounting (MAcc)', '15+ Years Experience', 'Multi-Industry Expertise'],
  linkedin: 'https://linkedin.com/in/dhara-nakrani',
};

export default function AboutPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 py-20"
        >
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About QuantiFi
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Founded on the principle that exceptional accounting shouldn&apos;t be a luxury reserved for enterprises. 
                We bring professional-grade financial management to businesses that are ready to scale.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Leadership */}
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
                  <Badge className="mb-4">Leadership</Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Dhara Nakrani
                  </h2>
                  <p className="text-xl text-primary font-semibold mb-6">
                    Principal & MAcc Certified Professional
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {leadership.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {leadership.credentials.map((credential, index) => (
                      <Badge key={index} variant="outline" className="py-1">
                        {credential}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button asChild variant="secondary">
                      <a href={leadership.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Card className="p-8 w-fit">
                    <Avatar className="w-64 h-64">
                      <AvatarImage
                        src="/images/dhara-nakrani.jpg"
                        alt={leadership.name}
                        className="w-full h-full rounded-lg object-cover"
                      />
                      <AvatarFallback className="w-full h-full rounded-lg bg-muted text-4xl">
                        DN
                      </AvatarFallback>
                    </Avatar>
                    <CardContent className="text-center mt-4">
                      <h3 className="font-bold text-lg">{leadership.name}</h3>
                      <p className="text-muted-foreground">{leadership.title}</p>
                    </CardContent>
                  </Card>
                </div>
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
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Our Philosophy</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Leading with Purpose
                </h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Dhara established QuantiFi to redefine accounting as a true partnership — not an outsourced function.
                  Her philosophy is built on collaboration, precision, and transparency.
                  At its core, QuantiFi is designed for the modern business: nimble, strategic, and deeply invested in long-term success.
                </p>
                <p>
                  Today, QuantiFi partners with founders, operators, and management teams across the U.S., helping them streamline operations, gain financial control, and stay ready for what&apos;s next.
                </p>
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
                  <Badge className="mb-4">Expertise</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Expertise That Creates Impact
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Under Dhara&apos;s leadership, QuantiFi provides strategic accounting, financial consulting, and process optimization to clients across multiple industries — including construction, healthcare, hospitality, retail, and professional services.
                    </p>
                    <p>
                      She and her team bridge the gap between financial systems, internal operations, and leadership strategy — ensuring every client has accurate data, meaningful insights, and a clear financial direction.
                    </p>
                  </div>
                </div>
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-none shadow-xl">
                  <div className="relative">
                    <svg className="absolute -top-4 -left-2 w-12 h-12 text-primary/20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.7-1.3l.3.3v1l4.5 4.5 1.5-1.5-4.5-4.5h-1l-.3-.3c.8-1 1.3-2.3 1.3-3.7 0-3.3-2.7-6-6-6z"/>
                    </svg>
                    <blockquote className="text-xl md:text-2xl font-semibold text-foreground italic leading-relaxed pt-8">
                      &quot;Accounting isn&apos;t just about accuracy — it&apos;s about alignment with your goals, your growth, and your vision.&quot;
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
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Our Reach</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nationwide Reach, Local Insight
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                We lead a nationwide team that delivers clarity and control to clients across the country.
                Whether supporting an in-house accounting department or managing a full accounting function, QuantiFi operates as an extension of the client&apos;s team — connecting people, processes, and technology under one cohesive system.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Atlanta, Georgia</h3>
                  <p className="text-sm text-muted-foreground">Headquarters</p>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Los Angeles, California</h3>
                  <p className="text-sm text-muted-foreground">West Coast Office</p>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Nationwide</h3>
                  <p className="text-sm text-muted-foreground">Remote Services</p>
                </Card>
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
                  <Badge className="mb-4">Our Approach</Badge>
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
