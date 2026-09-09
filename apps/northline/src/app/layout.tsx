import type { Metadata } from 'next';
import { Archivo, Public_Sans } from 'next/font/google';
import './globals.css';

const display = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Public_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'NORTHLINE — Real Estate',
  description:
    'Modern residential real estate along the northern corridor. Filter listings and book a viewing.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'NORTHLINE — Real Estate',
    description: 'Filter listings and book a viewing along the northern line.',
    type: 'website',
    images: [{ url: `${base}/images/hero.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NORTHLINE — Real Estate',
    description: 'Filter listings and book a viewing along the northern line.',
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
    '@type': 'RealEstateAgent',
    name: 'NORTHLINE',
    description: 'Residential real estate agency for apartments, houses, and lofts.',
    telephone: '+1-206-555-0138',
    email: 'hello@northline.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '400 Pike Street',
      addressLocality: 'Seattle',
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
