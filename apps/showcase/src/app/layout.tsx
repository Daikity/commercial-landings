import type { Metadata } from 'next';
import { IBM_Plex_Sans, Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Commercial Landings — Showcase',
  description:
    '15 commercial landing pages across 5 industries and 3 visual directions. Fictional brands for portfolio demonstration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${ibmPlex.variable} antialiased`}>{children}</body>
    </html>
  );
}
