import styles from "./SlupPage.module.css";
import { getProductBySlug } from "@/wix-api/products";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails/ProductDetails";
import { Metadata } from "next";
import { getWixServerClient } from "@/lib/wix-client.server";
import TextImageFlip from "@/components/TextImageFlip/TextImageFlip";
import FlipOne from "../../../../public/images/contactii.jpg";
import FlipTwo from "../../../../public/images/aboutii.jpg";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Nav from "@/components/Nav/Nav";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const wixClient = await getWixServerClient();
  const product = await getProductBySlug(wixClient, slug);

  if (!product) notFound();

  const mainImage = product.media?.mainMedia?.image;

  return {
    title: product.name,
    description: "Get this product on flowshop",
    openGraph: {
      images: mainImage?.url
        ? [
            {
              url: mainImage.url,
              width: mainImage.width,
              height: mainImage.height,
              alt: mainImage.altText || "",
            },
          ]
        : undefined,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const wixClient = await getWixServerClient();
  const product = await getProductBySlug(wixClient, slug);

  if (!product?._id) notFound();

  // const media = product.media?.items;

  return (
    <main>
      <Nav />
      <div className={styles.topContainer}>
        <ProductDetails product={product} />
      </div>

      <TextImageFlip
        src={FlipOne}
        title='A sweet touch to every occasion'
        text="Savor the natural sweetness of raw honeycomb, a delicacy crafted by nature's finest artisans—bees. Packed with golden honey and encased in edible wax, each bite is a perfect blend of chewy texture and rich flavor. Whether drizzled over your favorite foods or enjoyed on its own, our honeycomb elevates any culinary experience."
      />
      <TextImageFlip
        src={FlipTwo}
        title='Pure honeycomb, pure bliss'
        text="Our honey isn't just a treat; it's a journey through nature's wonders. Harvested from sustainable hives, this golden nectar is perfect for enhancing teas, breakfasts, or charcuterie boards. From morning rituals to evening indulgences, a spoonful of our honey transforms every moment into something extraordinary."
        flip='flip'
      />
      <RelatedProducts productId={product._id} />
    </main>
  );
}
