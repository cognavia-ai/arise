import HeroSection from "@/components/home/HeroSection";
import ThreePillars from "@/components/home/ThreePillars";
import DoctorBrief from "@/components/home/DoctorBrief";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesPreview from "@/components/home/ServicesPreview";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ThreePillars />
      <DoctorBrief />
      <StatsCounter />
      <ServicesPreview />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
