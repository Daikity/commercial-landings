import type { Metadata } from 'next';
import { Libre_Baskerville, Mulish } from 'next/font/google';
import './globals.css';

const display = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'ORBIT LAW — Legal Consultancy',
  description:
    'Modern legal consultancy in New York: corporate, dispute, and privacy counsel. Speak with counsel.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'ORBIT LAW — Legal Consultancy',
    description: 'Corporate, dispute, and privacy counsel. Speak with counsel.',
    type: 'website',
    images: [{ url: `${base}/images/hero.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORBIT LAW — Legal Consultancy',
    description: 'Corporate, dispute, and privacy counsel. Speak with counsel.',
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
    '@type': 'LegalService',
    name: 'ORBIT LAW',
    description: 'Modern legal consultancy: corporate, dispute, privacy.',
    telephone: '+1-212-555-0144',
    email: 'counsel@orbitlaw.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '88 Pine Street',
      addressLocality: 'New York',
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
