import type { Metadata } from 'next';
import { Literata, Syne } from 'next/font/google';
import './globals.css';

const display = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Literata({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'FERMENT — Artisan Sourdough',
  description:
    'Artisan sourdough bakery. Follow the process from grain to bread. Reserve a loaf for weekend pickup.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'FERMENT — Artisan Sourdough',
    description: 'Artisan sourdough. Grain to bread. Reserve a loaf.',
    type: 'website',
    images: [{ url: `${base}/images/hero-grain.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FERMENT — Artisan Sourdough',
    description: 'Artisan sourdough. Grain to bread. Reserve a loaf.',
    images: [`${base}/images/hero-grain.png`],
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
    name: 'FERMENT',
    description: 'Artisan sourdough bakery focused on long fermentation.',
    telephone: '+1-503-555-0177',
    email: 'hello@ferment.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '88 Division Street',
      addressLocality: 'Portland',
      addressCountry: 'US',
    },
    url: `http://localhost${base}/`,
  };

  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
