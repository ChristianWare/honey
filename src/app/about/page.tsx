import PageIntro from "@/components/PageIntro/PageIntro";
import AboutImg from "../../../public/images/aboutiii.jpg";
import PostAboutHero from "./aboutComponents/PostAboutHero/PostAboutHero";

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        text='About Us'
        src={AboutImg}
        copy='Like wine, our honey  takes on the flavor of where it’s from. We source a wide variety of premium, raw & unfiltered honey from beekeepers we know and trust.'
      />
      <PostAboutHero />
    </main>
  );
}
