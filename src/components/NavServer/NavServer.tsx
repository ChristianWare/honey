import Nav from "../Nav/Nav";
// import { getWixServerClient } from "@/lib/wix-client.server";
// import { getCart } from "@/wix-api/cart";
// import { getLoggedInMember } from "@/wix-api/members";

export default async function NavServer({ color }: { color?: string }) {
  // const wixClient = await getWixServerClient();
  // const [cart, loggedInMember] = await Promise.all([
  //   getCart(wixClient),
  //   getLoggedInMember(wixClient),
  // ]);

  // return <Nav color={color} cart={cart} loggedInMember={loggedInMember} />;
  return <Nav color={color} />;
}
