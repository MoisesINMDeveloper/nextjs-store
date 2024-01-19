"use client";

import { useState } from "react";
import Image from "next/image";
import { PLACEHOLDER_IMAGE } from "../../../../public/images/description/place.holder.blur";

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);
  console.log(hasBorder);
  return (
    <section className="flex flex-col items-center w-[100vw]">
      <button onClick={handleClick}>
        <div className="relative rounded-full w-[18rem] h-[18rem] my-2 shadow-[0px_0px_43px_4px_#9f7aea]">
          <Image
            className="rounded-full"
            src="/images/description/description.jpeg"
            alt="Imagen Logo"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
            // quality={100}
            // priority={true}
          />
        </div>
      </button>

      <h2 className="text-white font-medium text-lg w-[80vw] mt-8 ">
        Bring the future today
      </h2>
      <p className="text-white font-light text-md w-[80vw] text-justify mt-4">
        Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of
        cutting-edge gadgets and gear. Stay ahead of the curve and redefine your
        digital lifestyle with us.
      </p>
    </section>
  );
};
