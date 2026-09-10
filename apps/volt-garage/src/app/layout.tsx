import type { Metadata } from 'next';
import { Sora, Space_Mono } from 'next/font/google';
import './globals.css';

const display = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'VOLT GARAGE — EV Studio',
  description:
    'Premium EV studio in San Francisco: charge health, software bay, finish coat. Reserve a bay.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'VOLT GARAGE — EV Studio',
    description: 'Charge health, software bay, finish coat. Reserve a bay.',
    type: 'website',
    images: [{ url: `${base}/images/hero.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLT GARAGE — EV Studio',
    description: 'Charge health, software bay, finish coat. Reserve a bay.',
    images: [`${base}/images/hero.png`],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'VOLT GARAGE',
    description: 'EV / premium automotive studio for charging, software, and finish care.',
    telephone: '+1-628-555-0142',
    email: 'bay@voltgarage.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2100 Pier Avenue',
      addressLocality: 'San Francisco',
      addressCountry: 'US',
    },
    url: `http://localhost${base}/`,
  };

  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
