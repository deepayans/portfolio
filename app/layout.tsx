import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepayan Sarkar — Data Scientist",
  description:
    "Data Scientist with 4+ years of industry experience at Accenture. Building NLP pipelines, recommendation systems, and predictive models. Available May 2026.",
  keywords: ["data science", "machine learning", "NLP", "Python", "Accenture", "KEDGE", "portfolio"],
  authors: [{ name: "Deepayan Sarkar" }],
  openGraph: {
    title: "Deepayan Sarkar — Data Scientist",
    description:
      "Data Scientist with 4+ years at Accenture. Cut research time from 6 weeks to under 1 hour with AI. Available for internships from May 2026 in Bordeaux, France.",
    type: "website",
    url: "https://deepayan.me",
    images: [
      {
        url: "https://deepayan.me/profile.jpg",
        width: 400,
        height: 400,
        alt: "Deepayan Sarkar — Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Deepayan Sarkar — Data Scientist",
    description: "Data Scientist with 4+ years at Accenture. Available May 2026.",
    images: ["https://deepayan.me/profile.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Deepayan Sarkar",
              jobTitle: "Data Scientist",
              url: "https://deepayan.me",
              image: "https://deepayan.me/profile.jpg",
              email: "deepayans77@gmail.com",
              address: { "@type": "PostalAddress", addressLocality: "Bordeaux", addressCountry: "FR" },
              sameAs: [
                "https://linkedin.com/in/deepayansarkar",
                "https://github.com/deepayans",
              ],
              alumniOf: [
                { "@type": "CollegeOrUniversity", name: "KEDGE Business School" },
                { "@type": "CollegeOrUniversity", name: "University of Engineering & Management" },
              ],
            }),
          }}
        />
      </head>
      {/* suppressHydrationWarning prevents hydration mismatch from browser extensions (e.g. Grammarly) */}
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
