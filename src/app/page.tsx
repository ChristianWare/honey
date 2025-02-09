import ContactSection from "@/components/ContactSection/ContactSection";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Footer from "@/components/Footer/Footer";
import GridSection from "@/components/GridSection/GridSection";
import Hero from "@/components/Hero/Hero";
import NewFaq from "@/components/NewFaq/NewFaq";
import PostHero from "@/components/PostHero/PostHero";
import ProductPreviewSection from "@/components/ProductPreviewSection/ProductPreviewSection";
import Quotes from "@/components/Quotes/Quotes";
import ScrollLogos from "@/components/ScrollLogos/ScrollLogos";
import Unlock from "@/components/Unlock/Unlock";
import Spotlight from "./about/aboutComponents/Spotlight/Spotlight";

export default function Home() {
  return (
    <main>
      <Hero />
      <PostHero />
      <Spotlight />
      <FeaturedProducts />
      <ProductPreviewSection />
      <GridSection />
      <ScrollLogos />
      <Quotes />
      <Unlock />
      <NewFaq />
      <ContactSection />
      <Footer />
    </main>
  );
}

