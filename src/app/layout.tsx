import type { Metadata } from "next";
import { Lilita_One, Quicksand } from "next/font/google";
import "./globals.css";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Sumukhi — Playful Developer & Curious Explorer",
  description:
    "Hi, I'm Sumukhi! A 25-year-old full-stack developer who builds with curiosity, joy, and a whole lot of heart. Explore my work and world.",
  keywords: [
    "Sumukhi",
    "Kalimireddy Bala Sumukhi",
    "Full-Stack Developer",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Kalimireddy Bala Sumukhi" }],
  openGraph: {
    title: "Sumukhi — Playful Developer & Curious Explorer",
    description:
      "A 25-year-old developer who builds with curiosity, joy, and heart.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumukhi — Playful Developer & Curious Explorer",
    description:
      "A 25-year-old developer who builds with curiosity, joy, and heart.",
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
        suppressHydrationWarning
        className={`${lilitaOne.variable} ${quicksand.variable} font-body antialiased bg-cream text-ink overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
