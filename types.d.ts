interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
type ShopifyProduct = {
  id: string;
  variants: {
    admin_graphql_api_id: string;
    price: number;
    inventory_quantity: number;
  }[];
  title: string;
  body_html: string;
  images: {
    src: string;
  }[];
  handle: string;
  tags: string;
};
type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
};
interface Collection {
  id: string;
  title: string;
  handle: string;
}
type Products = {
  id: string | number;
  gql_id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string | string[];
};
