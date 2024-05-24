import { AboutUsSection } from "@/components/about-us/about-us-section";
import { HomeBanner } from "@/components/home/home-banner";
import { HomeBannerMobile } from "@/components/home/home-banner-mobile";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ProjectsGallery } from "@/components/home/projects-gallery";
import { Testimonials } from "@/components/home/testimonials";
import Blogs from "@/components/home/blogs";

export default async function LandingPage() {
  return (
    <>
      <HomeBanner />
      <HomeBannerMobile />
      <AboutUsSection />
      <WhyChooseUs />
      <ProjectsGallery />
      <Testimonials />
    </>
  );
}
