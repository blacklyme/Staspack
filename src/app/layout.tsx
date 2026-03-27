import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Staspack | Strategic Procurement & Packaging Solutions",
  description:
    "Over 30 years of global procurement expertise. Staspack connects UK and European businesses with vetted manufacturers across Europe and Turkey. Packaging sourcing, supply chain consultancy, and cost optimisation.",
  keywords: [
    "procurement consultancy",
    "packaging sourcing",
    "supply chain management",
    "UK procurement",
    "Turkey sourcing",
    "packaging products",
    "supplier management",
    "cost optimisation",
    "sustainable packaging",
    "corrugated boxes",
    "stretch film",
  ],
  authors: [{ name: "Staspack Procurement Services Ltd" }],
  openGraph: {
    title: "Staspack | Strategic Procurement, Simplified.",
    description:
      "30+ years of procurement expertise. We connect UK businesses with vetted European and Turkish manufacturers.",
    url: "https://www.staspack.com",
    siteName: "Staspack",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Staspack | Strategic Procurement, Simplified.",
    description:
      "30+ years of procurement expertise connecting UK businesses with vetted manufacturers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
