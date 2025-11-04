'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const RECAPTCHA_SITE_KEY = '6LfPRgIsAAAAAC8Cy_bAFxAl8Betm_yqM53kwejW';

interface ContactFormProps {
  className?: string;
}

function ContactFormContent({ className }: ContactFormProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Select an industry',
    message: '',
  });

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!executeRecaptcha) {
        setSubmitStatus({
          type: 'error',
          message: 'reCAPTCHA is not loaded. Please refresh the page.',
        });
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: '' });

      try {
        // Execute reCAPTCHA v3
        const recaptchaToken = await executeRecaptcha('contact_form');

        // Submit form data with reCAPTCHA token
        interface ApiResponse {
          message?: string;
          error?: string;
          details?: string;
        }
        
        let response: Response;
        let data: ApiResponse;
        
        try {
          response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formData,
              recaptchaToken,
            }),
          });
          
          // Parse JSON response
          try {
            data = await response.json() as ApiResponse;
          } catch {
            throw new Error('Failed to parse server response. Please try again.');
          }
        } catch (fetchError) {
          // Network error or fetch failed
          const fetchMsg = fetchError instanceof Error 
            ? fetchError.message 
            : (fetchError !== null && fetchError !== undefined ? String(fetchError) : 'Network error occurred');
          throw new Error(`Failed to submit form: ${fetchMsg}`);
        }

        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
          });
          // Reset form
          setFormData({
            name: '',
            email: '',
            company: '',
            industry: 'Select an industry',
            message: '',
          });
        } else {
          const errorMessage = data.error || 'Failed to send message. Please try again.';
          const errorDetails = data.details ? ` ${data.details}` : '';
          setSubmitStatus({
            type: 'error',
            message: `${errorMessage}${errorDetails}`,
          });
        }
      } catch (error) {
        console.error('Form submission error:', error);
        
        // Ensure we always have a valid error message
        let errorMessage = 'An unexpected error occurred. Please try again later.';
        
        if (error instanceof Error) {
          errorMessage = error.message || errorMessage;
        } else if (error !== null && error !== undefined) {
          errorMessage = String(error);
        }
        
        setSubmitStatus({
          type: 'error',
          message: errorMessage,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [executeRecaptcha, formData]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Card className={`p-8 border-2 border-black dark:border-white bg-white dark:bg-black ${className || ''}`}>
      <CardHeader>
        <CardTitle className="text-2xl text-black dark:text-white">Send us a message</CardTitle>
        <p className="text-black dark:text-white">
          Fill out the form below and we&apos;ll get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`p-4 rounded-md flex items-start space-x-3 ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
              }`}
            >
              {submitStatus.type === 'success' ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              )}
              <p
                className={`text-sm ${
                  submitStatus.type === 'success'
                    ? 'text-green-800 dark:text-green-200'
                    : 'text-red-800 dark:text-red-200'
                }`}
              >
                {submitStatus.message}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-black dark:text-white">
                Full Name *
              </label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                className="border-2 border-black dark:border-white"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-black dark:text-white">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                className="border-2 border-black dark:border-white"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2 text-black dark:text-white">
              Company
            </label>
            <Input
              id="company"
              placeholder="Your Company Inc."
              className="border-2 border-black dark:border-white"
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium mb-2 text-black dark:text-white">
              Industry
            </label>
            <select
              id="industry"
              className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white rounded-md focus:ring-2 focus:ring-[#0015ff] focus:border-[#0015ff]"
              value={formData.industry}
              onChange={handleChange}
              disabled={isSubmitting}
            >
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
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0015ff] hover:bg-[#0012cc] text-white"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export function ContactForm({ className }: ContactFormProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <ContactFormContent className={className} />
    </GoogleReCaptchaProvider>
  );
}
