import Image from "next/image";
import Link from "next/link";
import "../../../styles/globals.css";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link
      className="decoration  text-white cursor-pointer"
      href={`/product/${product.handle}?id=${product.id}`}
    >
      <article className="flex flex-col items-center mb-[2rem] ">
        <div className=" ">
          <Image
            className="rounded-sm"
            src={product.image}
            alt={product.title}
            quality={80}
            height={320}
            width={320}
            loading="eager"
          />
          <h3 className="text-left mt-2 text-[1rem] font-semibold">
            {product.title}
          </h3>
        </div>
        <div className="flex items-end justify-end mt-[1rem] absolute w-[90vw]">
          <span className=" bg-red-800 border-none rounded-sm items-center p-[0.25rem] absolute mt-[-0.8rem]  transform">
            ${product.price} USD
          </span>
        </div>
      </article>
    </Link>
  );
};
