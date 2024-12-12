import PageIntro from "@/components/PageIntro/PageIntro";
import ContactImg from "../../../public/images/contactii.jpg";

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        text='Contact'
        src={ContactImg}
        copy='Like wine, our honey  takes on the flavor of where it’s from. We source a wide variety of premium, raw & unfiltered honey from beekeepers we know and trust.'
      />
    </main>
  );
}
