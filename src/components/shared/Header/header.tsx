import Link from "next/link";

export const Header = () => {
  console.log("Hola mundo header");

  return (
    <header className="my-4">
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <Link href="/">
            <li className="text-[#d82cd8]">Home</li>
          </Link>
          <Link href="/store">
            <li className="text-[#d82cd8]">Store</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
