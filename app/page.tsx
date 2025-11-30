import dynamic from "next/dynamic";
import NavbarNew from "@/components/NavbarNew";
import HeroNew from "@/components/HeroNew";

// Dynamically import below-the-fold components to reduce initial bundle
const ProjectsSectionNew = dynamic(() => import("@/components/ProjectsSectionNew"), {
  loading: () => <div className="min-h-screen bg-black" />,
});
const AboutSectionNew = dynamic(() => import("@/components/AboutSectionNew"), {
  loading: () => <div className="min-h-screen bg-black" />,
});
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <div className="min-h-[50vh] bg-black" />,
});
const PricingSection = dynamic(() => import("@/components/PricingSection"), {
  loading: () => <div className="min-h-[50vh] bg-black" />,
});
const ReviewsSection = dynamic(() => import("@/components/ReviewsSection"), {
  loading: () => <div className="min-h-[50vh] bg-black" />,
});
const ContactSectionNew = dynamic(() => import("@/components/ContactSectionNew"), {
  loading: () => <div className="min-h-[50vh] bg-black" />,
});
const FooterNew = dynamic(() => import("@/components/FooterNew"), {
  loading: () => <div className="h-20 bg-black" />,
});

export default function Home() {
  return (
    <>
      <NavbarNew />
      
      <main>
        {/* Hero Section - Full screen intro with CTAs */}
        <HeroNew />

        {/* Projects Section */}
        <ProjectsSectionNew />

        {/* About Section */}
        <AboutSectionNew />

        {/* Services Section */}
        <ServicesSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Reviews / Social Proof Section */}
        <ReviewsSection />

        {/* Contact Section */}
        <ContactSectionNew />
      </main>

      {/* Footer */}
      <FooterNew />
    </>
  );
}
