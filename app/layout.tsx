import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deepayan Sarkar | Engineering Intelligence',
  description: 'Production data engineer turned applied data scientist. Four years driving efficiency at Accenture, currently bridging the gap between raw data and business impact via MSc research in Generative AI.',
  openGraph: {
    title: 'Deepayan Sarkar | Engineering Intelligence',
    description: 'Production data engineer turned applied data scientist. View my enterprise work, metrics, and applied AI projects.',
    url: 'https://deepayan.me',
    siteName: 'Deepayan Sarkar',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deepayan Sarkar Portfolio',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
