import type { Metadata } from 'next';
import { Teko, Titillium_Web } from 'next/font/google';
import './globals.css';

const display = Teko({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Titillium_Web({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'APEX / PERFORMANCE — Dyno & Maps',
  description:
    'Performance automotive workshop in Los Angeles: dyno pulls, ECU maps, track prep. Book a run.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'APEX / PERFORMANCE — Dyno & Maps',
    description: 'Dyno pulls, ECU maps, track prep. Book a run.',
    type: 'website',
    images: [{ url: `${base}/images/hero.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APEX / PERFORMANCE — Dyno & Maps',
    description: 'Dyno pulls, ECU maps, track prep. Book a run.',
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
    name: 'APEX / PERFORMANCE',
    description: 'Performance automotive workshop: dyno, ECU maps, track prep.',
    telephone: '+1-213-555-0188',
    email: 'run@apexperformance.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '440 Raceway Blvd',
      addressLocality: 'Los Angeles',
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
