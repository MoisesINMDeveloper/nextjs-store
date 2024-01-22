"use client";

import { useState } from "react";
import Image from "next/image";
import { PLACEHOLDER_IMAGE } from "../../../../public/images/description/place.holder.blur";

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);
  return (
    <section className="flex flex-col items-center justify-center">
      <button onClick={handleClick}>
        <div className="relative rounded-full w-[16rem] h-[16rem] mt-8 shadow-[0px_0px_43px_4px_#9f7aea]">
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
      <section className="flex-col">
        <h2 className="text-white font-medium text-lg px-6 mt-14 ">
          Bring the future today
        </h2>
        <p className="text-white font-light text-md text-justify mt-4 px-6">
          Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world
          of cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </section>
    </section>
  );
};
