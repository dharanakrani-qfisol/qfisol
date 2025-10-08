import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { FileText, Calendar, Download, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Free accounting resources and lead magnets to help simplify your business finances.',
};

const featuredResource = {
  title: 'The Complete Guide to Small Business Accounting: 2024 Edition',
  description: 'Everything you need to know about bookkeeping, financial reporting, and tax optimization for growing businesses.',
  image: '/images/guide-cover.jpg',
  downloadCount: 5000,
  type: 'PDF Guide',
  industry: 'All Industries',
};

const resources = [
  {
    title: 'Construction Job Costing Best Practices',
    description: 'Learn how to track costs accurately across multiple projects.',
    type: 'Guide',
    industry: 'Construction',
    date: '2024-01-15',
    readTime: '8 min read',
  },
  {
    title: 'Dental Practice Financial Management',
    description: 'Optimizing revenue cycles and insurance management.',
    type: 'Webinar',
    industry: 'Healthcare',
    date: '2024-01-10',
    readTime: '45 min',
  },
  {
    title: 'QuickBooks Online vs Desktop vs Enterprise',
    description: 'Choosing the right accounting software for your business.',
    type: 'Comparison',
    industry: 'All',
    date: '2024-01-08',
    readTime: '12 min read',
  },
  {
    title: 'Quarterly Tax Planning Checklist',
    description: 'Stay compliant and optimize your quarterly payments.',
    type: 'Checklist',
    industry: 'All Industries',
    date: '2024-01-05',
    readTime: '5 min read',
  },
];

const industries = ['All Industries', 'Construction', 'Healthcare', 'Hospitality', 'Professional Services'];

export default function ResourcesPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 py-20">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Resources Hub
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert insights, templates, and best practices to streamline your accounting operations.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Lead Magnet */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <Badge className="mb-4">Featured Download</Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {featuredResource.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {featuredResource.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Free download</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{featuredResource.downloadCount.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Industry: {featuredResource.industry}</span>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full md:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download Free Guide
                  </Button>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="h-20 w-20 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Guide Cover Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Tabs */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Browse Our Resources
                </h2>
                <p className="text-lg text-muted-foreground">
                  Discover accounting insights tailored to your industry and business needs.
                </p>
              </div>

              <Tabs defaultValue="guides" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-5">
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                  <TabsTrigger value="webinars">Webinars</TabsTrigger>
                  <TabsTrigger value="checklists">Checklists</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                  <TabsTrigger value="comparisons">Comparisons</TabsTrigger>
                </TabsList>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search resources..." 
                      className="pl-10"
                    />
                  </div>
                  <select className="h-10 px-3 border border-input bg-background rounded-md text-sm">
                    <option>All Industries</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <TabsContent value="guides">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources.map((resource, index) => (
                      <Card key={index} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline">{resource.type}</Badge>
                            <Badge variant="secondary">{resource.industry}</Badge>
                          </div>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{resource.description}</p>
                          <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <div className="flex items-center space-x-3">
                              <span>{resource.date}</span>
                              <span>•</span>
                              <span>{resource.readTime}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="webinars">
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Webinar recordings coming soon</p>
                  </div>
                </TabsContent>

                <TabsContent value="checklists">
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Accounting checklists being added weekly</p>
                  </div>
                </TabsContent>

                <TabsContent value="templates">
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Expandable templates library in development</p>
                  </div>
                </TabsContent>

                <TabsContent value="comparisons">
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Software comparison guides updating weekly</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Weekly Accounting Insights
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get the latest accounting best practices, industry updates, and exclusive resources delivered weekly.
                </p>
                <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                  <Input placeholder="Your email address" />
                  <Button>Subscribe</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}






