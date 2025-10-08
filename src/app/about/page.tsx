import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Award, Users, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet Dhara Nakrani and learn about Quantifi&apos;s mission to provide exceptional accounting services.',
};

const strengths = [
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Deep knowledge across construction, healthcare, professional services, and more.',
  },
  {
    icon: Users,
    title: 'Partnership Approach',
    description: 'We become an integrated part of your business success, not just a vendor.',
  },
  {
    icon: Shield,
    title: 'Technology-Driven',
    description: 'Latest accounting software and automation to deliver accurate, timely results.',
  },
];

const leadership = {
  name: 'Dhara Nakrani, MAcc',
  title: 'Principal & Founder',
  image: '/images/dhara-nakrani.jpg',
  bio: 'Dhara founded Quantifi to bridge the gap between traditional accounting and modern business needs. With 15+ years in public and private accounting, she specializes in helping growth-stage companies establish robust financial systems. Her MAcc and CPA credentials combined with industry experience across construction and professional services make her uniquely qualified to lead your financial transformation.',
  credentials: ['Master of Accounting (MAcc)', 'CPA License', '15+ Years Experience', 'Multi-Industry Expertise'],
  linkedin: 'https://linkedin.com/in/dhara-nakrani',
};

export default function AboutPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 py-20">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Quantifi
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Founded on the principle that exceptional accounting shouldn&apos;t be a luxury reserved for enterprises. 
                We bring professional-grade financial management to businesses that are ready to scale.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4">Leadership</Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Meet Dhara Nakrani
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
        </section>

        {/* Our Strengths */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Work With Quantifi?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our values and approach drive exceptional client outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {strengths.map((strength, index) => (
                  <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <strength.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl mb-3">{strength.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {strength.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="container-standard section-gutter text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Experience the difference of professional accounting when it&apos;s delivered with personal attention 
              and industry expertise.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="/contact">Schedule Your Consultation</a>
            </Button>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
