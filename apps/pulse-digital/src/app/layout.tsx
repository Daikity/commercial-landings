import type { Metadata } from 'next';
import { IBM_Plex_Mono, Unbounded } from 'next/font/google';
import './globals.css';

const display = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'PULSE DIGITAL — Digital Agency',
  description:
    'Digital agency in San Francisco: sites, products, campaigns. Start a build.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'PULSE DIGITAL — Digital Agency',
    description: 'Sites, products, campaigns. Start a build.',
    type: 'website',
    images: [{ url: `${base}/images/hero.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PULSE DIGITAL — Digital Agency',
    description: 'Sites, products, campaigns. Start a build.',
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
    name: 'PULSE DIGITAL',
    description: 'Digital agency for sites, products, and campaigns.',
    telephone: '+1-415-555-0199',
    email: 'hello@pulsedigital.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '900 Market Street',
      addressLocality: 'San Francisco',
      addressCountry: 'US',
    },
    url: `http://localhost${base}/`,
  };

  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
