import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'NOIR PÂTISSERIE — Premium Pastry Studio',
  description:
    'Private pastry atelier for signature desserts, tasting boxes, and celebrations. By appointment.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'NOIR PÂTISSERIE — Premium Pastry Studio',
    description: 'Private pastry atelier for signature desserts and celebrations.',
    type: 'website',
    images: [{ url: `${base}/images/hero-gateau.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOIR PÂTISSERIE — Premium Pastry Studio',
    description: 'Private pastry atelier for signature desserts and celebrations.',
    images: [`${base}/images/hero-gateau.png`],
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
    name: 'NOIR PÂTISSERIE',
    description: 'Premium private pastry atelier.',
    telephone: '+1-212-555-0199',
    email: 'atelier@noirpatisserie.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '14 Mercer Street',
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
