import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our accounting experts for a free consultation.',
};

const faqs = [
  {
    question: 'What accounting software do you work with?',
    answer: 'We work with all major platforms including QuickBooks Online, QuickBooks Desktop, Sage Intacct, Xero, and industry-specific solutions. We can also help you migrate between platforms as needed.',
  },
  {
    question: 'How quickly can you get started?',
    answer: 'We can complete our onboarding process within 1-2 weeks, depending on the complexity of your business and data gathering requirements. The timeline includes system setup, data migration, and team training.',
  },
  {
    question: 'What are your pricing options?',
    answer: 'Our pricing varies based on your business size, industry, and specific service requirements. We offer transparent, competitive pricing that includes all necessary services. Book a free consultation for a customized quote.',
  },
];

export default function ContactPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 py-20">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to transform your business financials? Schedule your free consultation and discover the difference professional accounting makes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Main Content */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input id="company" placeholder="Your Company Inc." />
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium mb-2">
                        Industry
                      </label>
                      <select className="w-full p-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent">
                        <option>Select an industry</option>
                        <option>Construction</option>
                        <option>Healthcare/Dental</option>
                        <option>Hospitality</option>
                        <option>Professional Services</option>
                        <option>Retail</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your accounting needs..." 
                        rows={5} 
                        className="resize-none"
                        required 
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information & FAQ */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <Card className="p-8">
                  <CardHeader>
                    <CardTitle>Direct Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@qfisol.com" className="text-muted-foreground hover:text-primary transition-colors">
                          info@qfisol.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+13016595995" className="text-muted-foreground hover:text-primary transition-colors">
                          +1 (301) 659-5995
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">Locations</p>
                        <p className="text-muted-foreground">
                          Atlanta, Georgia<br />
                          Los Angeles, California<br />
                          Dallas, Texas<br />
                          <span className="text-sm mt-2 block">Remote services available nationwide</span>
                        </p>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <Button asChild className="w-full" size="lg">
                      <a href="https://calendly.com/quantifi" target="_blank" rel="noopener noreferrer">
                        Schedule Free Consultation
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card className="p-8">
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
