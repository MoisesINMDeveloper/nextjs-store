import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future World",
  description: "Welcome to the future world, an ecommerce from other century",
  keywords: ["ecommerce", "future", "world", "tecnology"],
};
export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <MainProducts />
    </main>
  );
}
