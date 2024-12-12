import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import GridSection from "@/components/GridSection/GridSection";
import Hero from "@/components/Hero/Hero";
import NewFaq from "@/components/NewFaq/NewFaq";
import PostHero from "@/components/PostHero/PostHero";
import ProductPreviewSection from "@/components/ProductPreviewSection/ProductPreviewSection";
import Quotes from "@/components/Quotes/Quotes";
import ScrollLogos from "@/components/ScrollLogos/ScrollLogos";
import Unlock from "@/components/Unlock/Unlock";

export default function Home() {
  return (
    <main>
      <Hero />
      <PostHero />
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
