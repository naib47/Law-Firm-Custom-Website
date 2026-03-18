import PracticeAreas from "@/components/areas";
import Hero from "@/components/hero-section";
import ConsultationForm from "@/components/home-page-form";
import LawBridge from "@/components/law-bridge";
import Locations from "@/components/locations";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>

      <Hero/>
      <LawBridge/>
      <PracticeAreas/>
      <Testimonials/>
      <ConsultationForm/>
      <Locations/>
    </main>
  );
}