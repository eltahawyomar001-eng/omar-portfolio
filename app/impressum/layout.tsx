import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Omar Rageh",
  description: "Impressum und rechtliche Informationen für omar-portfolio.xyz",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
