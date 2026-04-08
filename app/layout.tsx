import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tarathep Butka | Software Developer Portfolio",
  description:
    "Software Developer passionate about building web and mobile applications. Specializing in full-stack development with TypeScript, NestJS, React, Next.js, and Flutter.",
  keywords: [
    "Tarathep Butka",
    "Fongt",
    "Software Developer",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "NestJS",
    "Flutter",
  ],
  authors: [{ name: "Tarathep Butka" }],
  openGraph: {
    title: "Tarathep Butka | Software Developer",
    description:
      "Software Developer passionate about building web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen scanline-overlay">
        {children}
      </body>
    </html>
  );
}
