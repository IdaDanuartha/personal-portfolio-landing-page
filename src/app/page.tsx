import HomeAboutSection from "./_components/home/about-section";
import HomeContactSection from "./_components/home/contact-section";
import HomeHeader from "./_components/home/header";
import HomeProjectsSection from "./_components/home/projects-section";
import HomeServicesSection from "./_components/home/services-section";
import HomeTestimonialsSection from "./_components/home/testimonials-section";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeAboutSection />
      <HomeServicesSection />
      <HomeProjectsSection />
      <HomeTestimonialsSection />
      <HomeContactSection />
    </>
  );
}
