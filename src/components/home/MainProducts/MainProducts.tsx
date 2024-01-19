import { Product } from "./products/product.model";
import Image from "next/image";

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        }),
      }
    );
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
export const MainProducts = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <section className="flex-col mt-12 w-[100vw] h-[100vh]">
      <h3 className="text-center font-semibold text-[3rem] text-white mb-6">
        New products released!
      </h3>
      <div className="flex-col w-[100vw]">
        {products?.map((product: Product) => {
          const imageSrc = product.images[0].src;
          return (
            <article className="relative z-1 min-h-[400px]" key={products.id}>
              <p className="absolute text-white mt-2 ml-[1rem] z-20 text-[1.5rem] font-bold max-w-[20rem] text-left">
                {product.title}
              </p>
              <Image
                className="h-[400px] opacity-[0.4] object-cover"
                src={imageSrc}
                fill
                alt={product.title}
                loading="eager"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
