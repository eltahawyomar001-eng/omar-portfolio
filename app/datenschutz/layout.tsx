import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Omar Rageh",
  description: "Datenschutzerklärung für omar-portfolio.xyz gemäß DSGVO",
  robots: {
    index: true,
    follow: true,
  },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
