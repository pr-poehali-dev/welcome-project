import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DinosaurGallery from "@/components/DinosaurGallery";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <DinosaurGallery />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
