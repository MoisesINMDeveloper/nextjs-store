import { ProductsWrapper } from "app/components/store/productWrapper";
import {
  getCollectionProducts,
  getCollections,
} from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default async function Category(props: CategoryProps) {
  try {
    const { categories } = props.params;
    let products = [];
    const collections = await getCollections();

    if (categories && categories.length > 0) {
      const selectedCollection = collections.find(
        (collection) => collection.handle === categories[0]
      );

      if (selectedCollection) {
        products = await getCollectionProducts(selectedCollection.id);
      } else {
        console.error("Category not found in collections.");
      }
    } else {
      products = await getProducts();
    }

    console.log("products", products);

    return <ProductsWrapper products={products} />;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Puedes manejar el error de alguna manera, como mostrar un mensaje al usuario.
    return <div>Error al cargar los productos.</div>;
  }
}
