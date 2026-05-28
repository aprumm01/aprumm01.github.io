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

export const metadata: Metadata = {
  title: "Adam Prumm | Principal UX Designer",
  description:
    "Principal UX Designer at SAP Concur. 10+ years designing enterprise products for the travel industry. PhD candidate in Informatics at Indiana University.",
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
