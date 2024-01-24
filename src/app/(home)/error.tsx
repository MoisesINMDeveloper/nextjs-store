"use client";

import { useEffect } from "react";

useEffect;
interface ErrorProps {
  error: Error;
  reset: () => void;
}
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex-col text-center mt-6">
      <p className="text-white font-semibold text-lg ">
        Lo sentimos... Ha ocurrido un error.
      </p>
      <button
        className="w-[12rem] h-[3rem] mt-4 font-semibold text-white rounded-3xl bg-[#6417bbbd]"
        onClick={reset}
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
