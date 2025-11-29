import NavbarNew from "@/components/NavbarNew";
import HeroNew from "@/components/HeroNew";
import ProjectsSectionNew from "@/components/ProjectsSectionNew";
import AboutSectionNew from "@/components/AboutSectionNew";
import ContactSectionNew from "@/components/ContactSectionNew";
import FooterNew from "@/components/FooterNew";

export default function Home() {
  return (
    <>
      <NavbarNew />
      
      <main>
        {/* Hero Section - Full screen dramatic intro */}
        <HeroNew />

        {/* Projects Section */}
        <ProjectsSectionNew />

        {/* About Section */}
        <AboutSectionNew />

        {/* Contact Section */}
        <ContactSectionNew />
      </main>

      {/* Footer */}
      <FooterNew />
    </>
  );
}
