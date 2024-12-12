import PageIntro from "@/components/PageIntro/PageIntro";
import AboutImg from "../../../public/images/aboutiii.jpg";
import PostAboutHero from "./aboutComponents/PostAboutHero/PostAboutHero";
import MissionValues from "./aboutComponents/MissionValues/MissionValues";
import Spotlight from "./aboutComponents/Spotlight/Spotlight";

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        text='About Us'
        src={AboutImg}
        copy='Our marketplace brings together the best local producers, offering a curated collection of honeys crafted with care and sustainability in mind. Taste the difference in every jar.'
      />
      <PostAboutHero />
      <MissionValues />
      <Spotlight />
    </main>
  );
}
