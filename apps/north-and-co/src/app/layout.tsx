import type { Metadata } from 'next';
import { Bricolage_Grotesque, Karla } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Karla({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'NORTH & CO — Strategy Studio',
  description:
    'Business consulting and strategy studio in New York. Clear frameworks, honest cases. Start an engagement.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'NORTH & CO — Strategy Studio',
    description: 'Clear frameworks, honest cases. Start an engagement.',
    type: 'website',
    images: [{ url: `${base}/images/hero.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NORTH & CO — Strategy Studio',
    description: 'Clear frameworks, honest cases. Start an engagement.',
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
    '@type': 'ProfessionalService',
    name: 'NORTH & CO',
    description: 'Business consulting and strategy studio.',
    telephone: '+1-646-555-0162',
    email: 'hello@northandco.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '120 Mercer Street',
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
