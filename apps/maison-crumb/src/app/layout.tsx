import type { Metadata } from 'next';
import { Fraunces, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'Maison Crumb — Fresh Bakery & Patisserie',
  description:
    'Neighborhood bakery baking sourdough, croissants, and seasonal tarts. Order pickup or local delivery.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'Maison Crumb — Fresh Bakery & Patisserie',
    description:
      'Neighborhood bakery baking sourdough, croissants, and seasonal tarts. Order pickup or local delivery.',
    type: 'website',
    images: [{ url: `${base}/images/hero-croissant.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maison Crumb — Fresh Bakery & Patisserie',
    description:
      'Neighborhood bakery baking sourdough, croissants, and seasonal tarts.',
    images: [`${base}/images/hero-croissant.png`],
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
    '@type': 'Bakery',
    name: 'Maison Crumb',
    description:
      'Neighborhood bakery baking sourdough, croissants, and seasonal tarts.',
    telephone: '+1-415-555-0142',
    email: 'hello@maisoncrumb.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '128 Grove Street',
      addressLocality: 'San Francisco',
      addressCountry: 'US',
    },
    openingHours: 'Tu-Su 07:00-18:00',
    url: `http://localhost${base}/`,
  };

  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${sourceSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
