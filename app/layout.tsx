import type { Metadata } from "next";
import "./globals.css";

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
  metadataBase: new URL("https://omar-portfolio.xyz"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omar-portfolio.xyz",
    title: "Omar Rageh – Full-stack Developer & Automation Builder",
    description:
      "Full-stack developer building practical web applications, automation tools, and data-driven workflows. View my projects and get in touch.",
    siteName: "Omar Rageh Portfolio",
    images: [
      {
        url: "/api/og",
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
    images: ["/api/og"],
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-black text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
