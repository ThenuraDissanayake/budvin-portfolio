import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} — Software Engineer`,
  description: personalInfo.bio,
  keywords: [
    "Budvin Dissanayake",
    "Software Engineer",
    "Full-Stack Developer",
    "Mobile Developer",
    "Next.js",
    "React Native",
    "Flutter",
    "Node.js",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} — Software Engineer`,
    description: personalInfo.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
