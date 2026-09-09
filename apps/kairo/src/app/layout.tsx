import type { Metadata } from 'next';
import { Figtree, Instrument_Serif } from 'next/font/google';
import { faqs } from '@/data/content';
import './globals.css';

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const body = Figtree({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'KAIRO — Stillness Practice',
  description:
    'A calm wellness studio for breath, stillness, and slow movement. Join a session.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'KAIRO — Stillness Practice',
    description: 'Breath, stillness, and slow movement. Join a session.',
    type: 'website',
    images: [{ url: `${base}/images/hero.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAIRO — Stillness Practice',
    description: 'Breath, stillness, and slow movement. Join a session.',
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
    '@type': 'HealthClub',
    name: 'KAIRO',
    description: 'Wellness studio for breathwork, yoga, and meditation.',
    telephone: '+1-415-555-0142',
    email: 'hello@kairo.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 Harbor Lane',
      addressLocality: 'San Francisco',
      addressCountry: 'US',
    },
    url: `http://localhost${base}/`,
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        {children}
      </body>
    </html>
  );
}
