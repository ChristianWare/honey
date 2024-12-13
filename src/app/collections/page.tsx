import PageIntro from "@/components/PageIntro/PageIntro";
import CollectionsImg from "../../../public/images/collections.jpg";
import CollectionGroup from "@/components/CollectionGroup/CollectionGroup";
import NewFaq from "@/components/NewFaq/NewFaq";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";

export default function CollectionsPage() {
  return (
    <main>
      <PageIntro
        text='Collections'
        src={CollectionsImg}
        copy='Like wine, our honey  takes on the flavor of where it’s from. We source a wide variety of premium, raw & unfiltered honey from beekeepers we know and trust.'
      />
      <CollectionGroup />
      <NewFaq />
      <ContactSection />
      <Footer />
    </main>
  );
}
