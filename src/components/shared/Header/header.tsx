import Link from "next/link";

export const Header = () => {
  return (
    <header className="my-4 w-[100vw]">
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <Link href="/">
            <li className=" text-[#d82cd8]">Home</li>
          </Link>
          <Link href="/store">
            <li className="text-[#d82cd8]">Store</li>
          </Link>
          <Link href="/test">
            <li className="text-[#d82cd8]">Test</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
