'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BookCallButton } from '@/components/ui/book-call-button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationItems } from '@/data/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavGridCard,
  NavSmallItem,
  NavLargeItem,
  NavItemMobile,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 20);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-background/80 backdrop-blur-sm border-b border-border/50 shadow-md'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/QuantiFi.svg"
              alt="QuantiFi Logo"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => {
                  if (item.type === 'submenu') {
                    if (item.title === 'Industries') {
                      const IconComponent = item.icon;
                      return (
                        <NavigationMenuItem key={item.title}>
                          <NavigationMenuTrigger className="flex items-center space-x-2 font-semibold">
                            {IconComponent && <IconComponent className="h-4 w-4" />}
                            <span>Industries</span>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="w-full md:w-4xl">
                              <ul className="grid gap-4 p-4 md:grid-cols-3">
                                {item.submenu?.map((link) => (
                                  <li key={`${item.title}-${link.href}`}>
                                    <NavGridCard link={link} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      );
                    } else if (item.title === 'Services') {
                      const IconComponent = item.icon;
                      return (
                        <NavigationMenuItem key={item.title}>
                          <NavigationMenuTrigger className="flex items-center space-x-2 font-semibold">
                            {IconComponent && <IconComponent className="h-4 w-4" />}
                            <span>Services</span>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="w-full md:w-4xl">
                              <ul className="grid gap-4 p-4 md:grid-cols-3">
                                {item.submenu?.map((link) => (
                                  <li key={`${item.title}-${link.href}`}>
                                    <NavGridCard link={link} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      );
                    }
                    return null;
                  } else {
                    const IconComponent = item.icon;
                    return (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link href={item.href} className="flex items-center space-x-2 font-semibold">
                            {IconComponent && <IconComponent className="h-4 w-4" />}
                            <span>{item.title}</span>
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  }
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <BookCallButton>
                Book a Call
              </BookCallButton>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                className="bg-background/95 supports-[backdrop-filter]:bg-background/80 w-full gap-0 backdrop-blur-lg"
              >
                <div className="flex h-14 items-center justify-end border-b px-4">
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <XIcon className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetClose>
                </div>
                <div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
                  <Accordion type="single" collapsible>
                    {navigationItems.map((item) => {
                      if (item.type === 'submenu') {
                        const IconComponent = item.icon;
                        return (
                          <AccordionItem key={item.title.toLowerCase()} value={item.title.toLowerCase()}>
                            <AccordionTrigger className="capitalize hover:no-underline flex items-center space-x-2 font-semibold">
                              {IconComponent && <IconComponent className="h-4 w-4" />}
                              <span>{item.title}</span>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-1">
                              <ul className="grid gap-1">
                                {item.submenu?.map((link) => (
                                  <li key={`${item.title}-${link.href}`}>
                                    <SheetClose asChild>
                                      <NavItemMobile item={link} href={link.href} />
                                    </SheetClose>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        );
                      } else {
                        const IconComponent = item.icon;
                        return (
                          <div key={item.title} className="px-4 py-2 border-b">
                            <SheetClose asChild>
                              <Link href={item.href} className="flex items-center space-x-2 text-sm font-semibold hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
                                {IconComponent && <IconComponent className="h-4 w-4" />}
                                <span>{item.title}</span>
                              </Link>
                            </SheetClose>
                          </div>
                        );
                      }
                    })}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
