import { getMainProducts } from "app/services/shopify/products";
import Image from "next/image";

export const MainProducts = async () => {
  const products = await getMainProducts();
  return (
    <section className="flex-col mt-12 h-[100vh]">
      <h3 className="text-center font-semibold text-[2.5rem] text-white mb-6">
        New products released!
      </h3>
      <div className="flex-col">
        {products?.map((product: ShopifyProduct) => {
          const imageSrc = product.images[0].src;
          return (
            <article className="relative z-1 min-h-[400px]" key={product.id}>
              <p className="absolute text-white mt-2 mx-[0.8rem] z-20 text-[1.5rem] font-bold max-w-[20rem] text-left">
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
