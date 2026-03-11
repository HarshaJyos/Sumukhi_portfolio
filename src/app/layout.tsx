import type { Metadata } from "next";
import { Lilita_One } from "next/font/google";
import "./globals.css";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita",
});

export const metadata: Metadata = {
  title: "Sumukhi | Developer Portfolio",
  description: "Full-Stack Developer — Building with curiosity and craft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${lilitaOne.variable} font-lilita antialiased bg-cream text-ink overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
