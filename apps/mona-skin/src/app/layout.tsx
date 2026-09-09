import type { Metadata } from 'next';
import { IBM_Plex_Sans, Newsreader } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'MONA Skin — Premium Skincare Clinic',
  description: 'Clinical calm for considered skin. Request a consult at MONA Skin.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'MONA Skin — Premium Skincare Clinic',
    description: 'Clinical calm for considered skin. Request a consult at MONA Skin.',
    type: 'website',
    images: [{ url: `${base}/images/hero.png` }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'MONA Skin',
    description: 'Premium skincare clinic.',
    telephone: '+1-415-555-0288',
    email: 'care@monaskin.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '801 Pacific Avenue',
      addressLocality: 'San Francisco',
      addressCountry: 'US',
    },
    url: `http://localhost${base}/`,
  };

  return (
    <html lang="en">
      <body className={`${newsreader.variable} ${plex.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
