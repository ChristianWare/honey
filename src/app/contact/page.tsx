import PageIntro from "@/components/PageIntro/PageIntro";
import ContactImg from "../../../public/images/contactii.jpg";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import NewFaq from "@/components/NewFaq/NewFaq";
import Unlock from "@/components/Unlock/Unlock";

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        text='Contact Us'
        src={ContactImg}
        copy='Have questions or need assistance? Reach out to us—we’d love to hear from you.'
        hours
      />
      <NewFaq />
      <Unlock />
      <ContactSection />
      <Footer />
    </main>
  );
}
