import PageIntro from "@/components/PageIntro/PageIntro";
import ShopImg from "../../../public/images/shop.jpg";

export default function ShopPage() {
  return (
    <main>
      <PageIntro
        text='Shop our honey'
        src={ShopImg}
        copy='Like wine, our honey  takes on the flavor of where it’s from. We source a wide variety of premium, raw & unfiltered honey from beekeepers we know and trust.'
      />
    </main>
  );
}
