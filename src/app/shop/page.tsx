import PageIntro from "@/components/PageIntro/PageIntro";
import ShopImg from "../../../public/images/shop.jpg";
import { Metadata } from "next";
import { getCollections } from "@/wix-api/collections";
import { getWixServerClient } from "@/lib/wix-client.server";
import LayoutWrapper from "@/components/LayoutWrapper";
import SearchFilterLayout from "./SearchFilterLayout";
import { Suspense } from "react";
import ProductResults from "@/components/ProductResults/ProductResults";
import { ProductsSort } from "@/wix-api/products";

interface PageProps {
  searchParams: Promise<{
    q?: string;
    page?: string;
    collection?: string[];
    price_min?: string;
    price_max?: string;
    sort?: string;
  }>;
}

// Updated generateMetadata
export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { q } = await searchParams; // Await the searchParams

  return {
    title: q ? `Results for "${q}"` : "Products",
  };
}

export default async function ShopPage({ searchParams }: PageProps) {
  const {
    q,
    page = "1",
    collection: collectionIds,
    price_min,
    price_max,
    sort,
  } = await searchParams; // Await the searchParams

  // Fetch collections
  const collections = await getCollections(await getWixServerClient());
  return (
    <main>
      <PageIntro
        text='Shop our honey'
        src={ShopImg}
        copy='Like wine, our honey  takes on the flavor of where it’s from. We source a wide variety of premium, raw & unfiltered honey from beekeepers we know and trust.'
      />
      <LayoutWrapper>
        <SearchFilterLayout collections={collections}>
          <Suspense fallback='Loading...' key={`${q}-${page}`}>
            <ProductResults
              q={q}
              page={parseInt(page)}
              collectionIds={collectionIds}
              priceMin={price_min ? parseInt(price_min) : undefined}
              priceMax={price_max ? parseInt(price_max) : undefined}
              sort={sort as ProductsSort}
            />
          </Suspense>
        </SearchFilterLayout>
      </LayoutWrapper>
    </main>
  );
}
