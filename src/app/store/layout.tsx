import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main>
      <h2 className="text-2xl text-white ml-8 mb-[1rem] font-bold">Explore</h2>
      <nav className="flex flex-wrap-reverse items-center justify-center text-white mb-[2rem] w-[100vw] ">
        {collections.map((collection) => (
          <Link
            className=" bg-gradient-to-r from-[#b70bc7ee] to-[#3201b9ee] bg-transparent text-[0.7rem] my-[.5rem] hover:text-blue-500 mx-2 p-3 rounded-full"
            key={collection.id}
            href={"/store/" + collection.handle}
          >
            {collection.title}
          </Link>
        ))}
      </nav>
      {children}
    </main>
  );
}
