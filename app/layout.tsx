import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Rageh – Full-stack Developer & Automation Builder",
  description:
    "Personal portfolio of Omar Rageh. Full-stack developer specializing in web applications, automation tools, and data-driven business workflows. Building practical solutions with Next.js, React, Python, and TypeScript.",
  keywords: [
    "Omar Rageh",
    "Full-stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Automation",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Omar Rageh" }],
  creator: "Omar Rageh",
  publisher: "Omar Rageh",
  metadataBase: new URL("https://omar-portfolio.vercel.app"), // Update with your actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omar-portfolio.vercel.app", // Update with your actual domain
    title: "Omar Rageh – Full-stack Developer & Automation Builder",
    description:
      "Full-stack developer building practical web applications, automation tools, and data-driven workflows. View my projects and get in touch.",
    siteName: "Omar Rageh Portfolio",
    images: [
      {
        url: "/og-image.png", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Omar Rageh - Full-stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Rageh – Full-stack Developer & Automation Builder",
    description:
      "Full-stack developer building practical web applications, automation tools, and data-driven workflows.",
    images: ["/og-image.png"], // You'll need to create this image
    creator: "@yourhandle", // Update with your Twitter handle
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
  verification: {
    // google: "your-google-verification-code", // Add when you verify with Google
    // yandex: "your-yandex-verification-code", // Optional
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
