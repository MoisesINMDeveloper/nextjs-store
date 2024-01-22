"use client";
import Image from "next/image";
export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <main className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-[2rem] font-extrabold m-0 bg-gradient-to-r from-[#b70bc7ee] to-[#3201b9ee] text-transparent bg-clip-text">
        Ha ocurrido un error
      </h1>
      <Image src="/images/error.png" width={500} height={500} alt="Error" />
      <p className="text-lg text-center w-[80vw] text-white">
        Al parecer ha ocurrido un error, pero no te sientas mal.
      </p>
      <button
        className=" w-[12rem] h-[4rem] mt-[1rem] rounded-full bg-gradient-to-r from-[#b70bc7ee] to-[#3201b9ee] bg-transparent cursor-pointer text-white text-[1.1rem]"
        onClick={reset}
      >
        Volver a intentar
      </button>
    </main>
  );
}
