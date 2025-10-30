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
      <div className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-white dark:bg-black py-12 md:py-16 lg:py-20 border-b-2 border-[#0015ff]">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black dark:text-white mb-8">
                Ready to transform your business financials? Schedule your free consultation and discover the difference professional accounting makes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Main Content */}
        <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-black">
          <div className="container-standard section-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="p-8 border-2 border-black dark:border-white bg-white dark:bg-black">
                <CardHeader>
                  <CardTitle className="text-2xl text-black dark:text-white">Send us a message</CardTitle>
                  <p className="text-black dark:text-white">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-black dark:text-white">
                          Full Name *
                        </label>
                        <Input id="name" placeholder="John Doe" required className="border-2 border-black dark:border-white" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-black dark:text-white">
                          Email *
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" required className="border-2 border-black dark:border-white" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-black dark:text-white">
                        Company
                      </label>
                      <Input id="company" placeholder="Your Company Inc." className="border-2 border-black dark:border-white" />
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium mb-2 text-black dark:text-white">
                        Industry
                      </label>
                      <select className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white rounded-md focus:ring-2 focus:ring-[#0015ff] focus:border-[#0015ff]">
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
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-black dark:text-white">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your accounting needs..." 
                        rows={5} 
                        className="resize-none border-2 border-black dark:border-white"
                        required 
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#0015ff] hover:bg-[#0012cc] text-white" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information & FAQ */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <Card className="p-4 sm:p-6 md:p-8 border-2 border-black dark:border-white bg-white dark:bg-black">
                  <CardHeader>
                    <CardTitle className="text-black dark:text-white">Direct Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#0015ff] rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-black dark:text-white">Email</p>
                        <a href="mailto:info@qfisol.com" className="text-black dark:text-white hover:text-[#0015ff] transition-colors">
                          info@qfisol.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#0015ff] rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-black dark:text-white">Phone</p>
                        <a href="tel:+13016595995" className="text-black dark:text-white hover:text-[#0015ff] transition-colors">
                          +1 (301) 659-5995
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#0015ff] rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-black dark:text-white">Locations</p>
                        <p className="text-black dark:text-white">
                          Atlanta, Georgia<br />
                          Los Angeles, California<br />
                          Dallas, Texas<br />
                          <span className="text-sm mt-2 block">Remote services available nationwide</span>
                        </p>
                      </div>
                    </div>

                    <Separator className="my-6 bg-black dark:bg-white" />

                    <Button asChild className="w-full bg-[#0015ff] hover:bg-[#0012cc] text-white" size="lg">
                      <a href="https://calendly.com/quantifi" target="_blank" rel="noopener noreferrer">
                        Schedule Free Consultation
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card className="p-4 sm:p-6 md:p-8 border-2 border-black dark:border-white bg-white dark:bg-black">
                  <CardHeader>
                    <CardTitle className="text-black dark:text-white">Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-black dark:border-white">
                          <AccordionTrigger className="text-left text-black dark:text-white hover:text-[#0015ff]">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-black dark:text-white leading-relaxed">
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
