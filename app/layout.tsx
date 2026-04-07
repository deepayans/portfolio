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
    description: "Data Scientist & Analytics Professional. Available May 2026.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      {/* suppressHydrationWarning prevents hydration mismatch from browser extensions (e.g. Grammarly) */}
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
