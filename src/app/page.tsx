import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import { getData } from "@/lib";

export default async function Home() {
  // const endpoint = "https://dummyjson.com/products";
  const products = await getData("https://dummyjson.com/products");

  return (
    <main>
      <Banner />
      <ProductList productsData={products} />
    </main>
  );
}
