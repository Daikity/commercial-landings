import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'VANTA DETAILING — Premium Car Care',
  description:
    'Premium car detailing in Chicago: paint correction, ceramic coating, and interior reset. Book a detail.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'VANTA DETAILING — Premium Car Care',
    description: 'Paint correction, ceramic coating, and interior reset. Book a detail.',
    type: 'website',
    images: [{ url: `${base}/images/hero.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VANTA DETAILING — Premium Car Care',
    description: 'Paint correction, ceramic coating, and interior reset. Book a detail.',
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
    '@type': 'AutoRepair',
    name: 'VANTA DETAILING',
    description: 'Premium car detailing: paint correction, ceramic coating, interior reset.',
    telephone: '+1-312-555-0174',
    email: 'book@vantadetailing.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '880 Industrial Drive',
      addressLocality: 'Chicago',
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
