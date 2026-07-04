import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = 'https://deepayan.me';

export const metadata: Metadata = {
  title: 'Deepayan Sarkar | Engineering Intelligence',
  description:
    'Production data engineer turned applied data scientist. Four years driving efficiency at Accenture, currently bridging the gap between raw data and business impact via MSc research in Generative AI.',
  robots: { index: true, follow: true },
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Deepayan Sarkar | Engineering Intelligence',
    description:
      'Production data engineer turned applied data scientist. View my enterprise work, metrics, and applied AI projects.',
    url: BASE_URL,
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
  twitter: {
    card: 'summary_large_image',
    title: 'Deepayan Sarkar | Engineering Intelligence',
    description:
      'Production data engineer turned applied data scientist. 4+ years at Accenture. MSc in Data Analytics for Business at KEDGE.',
    images: ['/og-image.jpg'],
    creator: '@deepayans77',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Deepayan Sarkar',
  url: BASE_URL,
  email: 'deepayans77@gmail.com',
  telephone: '+33-605-843-923',
  jobTitle: 'Data Scientist & Analytics Professional',
  description:
    'Data Science student with 4+ years of industry experience in data analytics at Accenture, transitioning into machine learning and AI.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'KEDGE Business School',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Engineering & Management',
    },
  ],
  sameAs: [
    'https://linkedin.com/in/deepayansarkar',
    'https://github.com/deepayans',
    'https://public.tableau.com/app/profile/deepayan.sarkar8273',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="top">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
