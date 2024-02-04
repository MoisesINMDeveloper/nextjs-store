import Link from "next/link";
import { cookies } from "next/headers";
import { ShoppingCart } from "../ShoppingCart";

export const Header = () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("accessToken")?.value;
  return (
    <header className=" my-4 w-[100vw]">
      <nav className="flex items-center mr-[1rem] ml-[1rem] justify-between gap-4">
        <ul className="flex items-center justify-center gap-4">
          <Link href="/">
            <li className=" text-[#d82cd8]">Home</li>
          </Link>
          <Link href="/store">
            <li className="text-[#d82cd8]">Store</li>
          </Link>
        </ul>
        <div className="flex gap-4">
          {token ? (
            <p className="text-white">Hola!</p>
          ) : (
            <Link href="/login" className="text-[#d82cd8]">
              Login
            </Link>
          )}
          <ShoppingCart />
        </div>
      </nav>
    </header>
  );
};
