import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './globals.css';

const sourceSans = Source_Sans_3({
  subsets: ['latin', 'cyrillic'],
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
      <body className={`${sourceSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
