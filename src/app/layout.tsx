import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qfisol.com"),
  title: "QuantiFi | Strategic Accounting & Fractional CFO Services",
  description: "QuantiFi is an outsourced accounting and fractional CFO partner that simplifies finance and drives growth. Discover our mission, values, and leadership team.",
  openGraph: {
    title: "QuantiFi | Strategic Accounting & Fractional CFO Services",
    description: "QuantiFi is an outsourced accounting and fractional CFO partner that simplifies finance and drives growth.",
    url: "https://qfisol.com",
    siteName: "QuantiFi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantiFi | Strategic Accounting & Fractional CFO Services",
    description: "QuantiFi is an outsourced accounting and fractional CFO partner that simplifies finance and drives growth.",
  },
  icons: {
    icon: "/QuantiFi-favicon.png",
    apple: "/QuantiFi-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}   
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P4VX4GJZRS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P4VX4GJZRS');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
