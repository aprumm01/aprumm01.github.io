import type { Metadata } from "next";
import { Inter, Gloock } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Gloock({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const META = {
  title: "Adam Prumm | Principal UX Designer",
  description:
    "Principal UX Designer at SAP Concur. 10 years of design experience spanning enterprise travel products, web design, and front-end development. PhD candidate in Informatics at Indiana University.",
  url: "https://aprumm01.github.io",
  image: "/projects/sap-concur/search-results.jpg",
};

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  metadataBase: new URL(META.url),
  openGraph: {
    title: META.title,
    description: META.description,
    url: META.url,
    siteName: "Adam Prumm",
    images: [
      {
        url: META.image,
        width: 1200,
        height: 675,
        alt: "Adam Prumm — UX Design Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
    images: [META.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
        {children}
      </body>
    </html>
  );
}
