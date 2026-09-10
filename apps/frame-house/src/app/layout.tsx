import type { Metadata } from 'next';
import { Source_Sans_3, Space_Grotesk } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'FRAME / HOUSE — Architecture',
  description:
    'Architecture studio. Scroll from plan to finished house. Brief the studio.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'FRAME / HOUSE — Architecture',
    description: 'Architecture as a sequence. Brief the studio.',
    type: 'website',
    images: [{ url: `${base}/images/hero.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FRAME / HOUSE — Architecture',
    description: 'Architecture as a sequence. Brief the studio.',
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
    '@type': 'Architect',
    name: 'FRAME / HOUSE',
    description: 'Architecture studio for houses and small cultural buildings.',
    telephone: '+1-917-555-0144',
    email: 'studio@framehouse.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '88 Wythe Avenue',
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
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
