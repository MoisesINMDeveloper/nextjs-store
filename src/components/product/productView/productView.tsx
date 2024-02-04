import Image from "next/image";
import { ProductViewItemsOrder } from "./productViewItemsOrder";
import { SanitizeHTML } from "app/components/shared/SanitizeHTML";
import "../../../styles/globals.css";
interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className="max-w-[1200px] flex-col justify-center items-center px-[1rem] mt-0 mx-auto">
      <section>
        <Image
          className="w-[90vw] h-[16rem]"
          loading="eager"
          src={product.image}
          width={300}
          height={300}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className="flex-col items-center justify-center">
        <h1 className="text-[1rem] text-white font-bold mt-2 mb-[0.5rem]">
          {product.title}
        </h1>
        <p className="w-fit text-Shadow font-bold text-xs leading-1 tracking-tighter border-[2px] tags-border border-solid py-[0.5rem] px-[1rem] rounded-md mt-2 text-white">
          {product.tags}
        </p>
        <SanitizeHTML
          className="text-[0.9rem] leading-2 text-justify my-4 text-white"
          tag={"p"}
        >
          {product.description}
        </SanitizeHTML>

        <span className=" text-[1.5rem] font-bold text-white">
          $ {product.price}
        </span>
        <ProductViewItemsOrder
          maxQuantity={product.quantity}
          product={product}
        />
      </section>
    </main>
  );
};
