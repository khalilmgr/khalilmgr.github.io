import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://khalil-moughamir.vercel.app";

export const metadata: Metadata = {
  title: "Khalil Moughamir — Portfolio Data & Développement Web",
  description:
    "Portfolio de Khalil Moughamir, étudiant en BUT Informatique parcours Data à l'IUT de Reims. Compétences en Python, SQL, Power BI, Tableau, React et développement web.",
  keywords: [
    "Khalil Moughamir",
    "khalil moughamir",
    "portfolio",
    "data",
    "data science",
    "python",
    "SQL",
    "power bi",
    "tableau",
    "développement web",
    "IUT Reims",
    "BUT Informatique",
  ],
  authors: [{ name: "Khalil Moughamir" }],
  creator: "Khalil Moughamir",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Khalil Moughamir — Portfolio Data & Développement Web",
    description:
      "Portfolio de Khalil Moughamir, étudiant en BUT Informatique parcours Data à l'IUT de Reims.",
    siteName: "Khalil Moughamir",
  },
  twitter: {
    card: "summary",
    title: "Khalil Moughamir — Portfolio",
    description:
      "Portfolio de Khalil Moughamir, étudiant en BUT Informatique parcours Data à l'IUT de Reims.",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Khalil Moughamir",
    url: siteUrl,
    jobTitle: "Étudiant BUT Informatique parcours Data",
    alumniOf: "IUT de Reims",
    email: "khalil.moughamir@gmail.com",
    sameAs: ["https://github.com/khalilmgr"],
    knowsAbout: ["Python", "SQL", "Data Science", "Power BI", "Tableau", "React", "PHP"],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
