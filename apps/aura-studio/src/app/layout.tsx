import type { Metadata } from 'next';
import { Outfit, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'AURA Studio — Beauty Salon',
  description:
    'Quiet beauty salon for hair, skin, and nails. Clear prices and easy booking.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'AURA Studio — Beauty Salon',
    description: 'Quiet beauty salon for hair, skin, and nails. Clear prices and easy booking.',
    type: 'website',
    images: [{ url: `${base}/images/hero-studio.png` }],
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
    '@type': 'BeautySalon',
    name: 'AURA Studio',
    description: 'Quiet beauty salon for hair, skin, and nails.',
    telephone: '+1-415-555-0190',
    email: 'hello@aurastudio.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '42 Linden Avenue',
      addressLocality: 'San Francisco',
      addressCountry: 'US',
    },
    openingHours: 'Tu-Sa 10:00-19:00',
    url: `http://localhost${base}/`,
  };

  return (
    <html lang="en">
      <body className={`${outfit.variable} ${sourceSerif.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
