'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import blog posts data from the blog page
const blogPosts = [
  {
    id: 1,
    slug: 'outsourced-accounting-vs-in-house-small-business',
    title: 'Outsourced Accounting vs. In-House: What\'s Best for Small Businesses?',
    excerpt: 'Small business owners often grapple with a critical question: should you hire an in-house accountant or outsource your accounting? Both approaches have merits, but the best choice depends on your company\'s needs, budget, and growth plans.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Accounting',
    readTime: '6 min read',
    publishDate: '2024-01-15',
    featured: true,
  },
  {
    id: 2,
    slug: 'top-7-bookkeeping-mistakes-small-business',
    title: 'Top 7 Bookkeeping Mistakes Small Businesses Make (and How to Avoid Them)',
    excerpt: 'Every entrepreneur makes a few financial missteps – but some bookkeeping mistakes can cost your small business serious money or headaches. In this post, we highlight the top 7 bookkeeping mistakes small business owners often make.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Bookkeeping',
    readTime: '7 min read',
    publishDate: '2024-01-12',
    featured: false,
  },
  {
    id: 3,
    slug: 'virtual-cfo-construction-business-growth',
    title: 'How a Virtual CFO Can Drive Growth for a Construction Business',
    excerpt: 'In the construction industry, financial management can be particularly complex. Project-based income, long payment cycles, and significant upfront costs mean construction companies face unique challenges managing cash flow and profitability.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Construction',
    readTime: '8 min read',
    publishDate: '2024-01-10',
    featured: false,
  },
  {
    id: 4,
    slug: 'virtual-cfo-hospitality-business-growth',
    title: 'How a Virtual CFO Can Drive Growth for a Hospitality Business',
    excerpt: 'The hospitality industry – encompassing hotels, restaurants, bars, and travel businesses – operates on tight margins and a need for constant financial agility. Seasonal fluctuations, changing consumer preferences, and high fixed costs make financial management both critical and challenging.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Hospitality',
    readTime: '8 min read',
    publishDate: '2024-01-08',
    featured: false,
  },
  {
    id: 5,
    slug: 'year-end-financial-checklist-small-business',
    title: 'Year-End Financial Checklist for Small Businesses',
    excerpt: 'As the calendar year draws to a close, small businesses should take time to close the books and prepare for a new year. Year-end is the perfect opportunity to clean up your finances, ensure compliance, and set the stage for a successful next year.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Tax Planning',
    readTime: '9 min read',
    publishDate: '2024-01-05',
    featured: false,
  },
];

export function LatestArticles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4; // Number of articles visible at once
  const maxIndex = Math.max(0, blogPosts.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visiblePosts = blogPosts.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-4xl font-bold text-black">
              The Resource Center
            </h2>
            <Link href="/resources/blogs">
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                View all articles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Want to understand business finances better? Our blogs can be a great starting point to enhance your financial knowledge.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black hover:bg-gray-800 text-white rounded-lg p-3 transition-all duration-300 shadow-lg"
            aria-label="Previous articles"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black hover:bg-gray-800 text-white rounded-lg p-3 transition-all duration-300 shadow-lg"
            aria-label="Next articles"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
            {visiblePosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/resources/blogs/${post.slug}`}
                className="group block"
              >
                <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#0015ff] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-black w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
