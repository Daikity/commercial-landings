import type { Metadata } from 'next';
import { Bodoni_Moda, DM_Sans } from 'next/font/google';
import './globals.css';

const display = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'ATELIER 27 — Interior Design',
  description:
    'Interior design studio presented as a magazine. Selected residential projects. Start a project.',
  metadataBase: new URL('http://localhost'),
  alternates: { canonical: `${base}/` },
  openGraph: {
    title: 'ATELIER 27 — Interior Design',
    description: 'Rooms composed like editorials. Start a project.',
    type: 'website',
    images: [{ url: `${base}/images/hero.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATELIER 27 — Interior Design',
    description: 'Rooms composed like editorials. Start a project.',
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
    name: 'ATELIER 27',
    description: 'Interior design studio for residential projects.',
    telephone: '+1-646-555-0127',
    email: 'studio@atelier27.demo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '27 Mercer Street',
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
