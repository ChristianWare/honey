import ContactSection from "@/components/ContactSection/ContactSection";
import GridSection from "@/components/GridSection/GridSection";
import Hero from "@/components/Hero/Hero";
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
      <Unlock />
      <GridSection />
      <ScrollLogos />
      <Quotes />
      <ProductPreviewSection />
      <ContactSection />
    </main>
  );
}
