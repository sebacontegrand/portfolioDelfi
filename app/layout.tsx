import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delfina Conte-Grand | Digital Marketing Analyst & Performance Specialist",
  description: "Portfolio of Delfina Conte-Grand, Digital Marketing Analyst specializing in performance campaigns, data behavior analysis, and funnel optimization in Buenos Aires, Argentina.",
  keywords: ["Digital Marketing", "Performance Analyst", "Data Analytics", "Funnel Optimization", "Google Ads", "Meta Ads", "Marketing Strategy", "Delfina Conte-Grand"],
  authors: [{ name: "Delfina Conte-Grand" }],
  creator: "Delfina Conte-Grand",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://delfinacg.com", // Assuming this will be the domain
    title: "Delfina Conte-Grand | Digital Marketing Analyst",
    description: "Expert in performance marketing and data-driven business results.",
    siteName: "Delfina Conte-Grand Portfolio",
    images: [
      {
        url: "/og-image.png", // We should generate/provide this image
        width: 1200,
        height: 630,
        alt: "Delfina Conte-Grand - Digital Marketing Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delfina Conte-Grand | Digital Marketing Analyst",
    description: "Expert in performance marketing and data-driven business results.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased bg-[#050505] text-white selection:bg-blue-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
