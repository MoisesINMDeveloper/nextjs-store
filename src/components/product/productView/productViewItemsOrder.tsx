"use client";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import "../../../styles/globals.css";
import { useShoppingCart } from "app/hooks/useShoppingCart";
interface ProductViewItemsOrderProps {
  maxQuantity: number;
  product: ProductType;
}

export const ProductViewItemsOrder = ({
  maxQuantity,
  product,
}: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useShoppingCart();

  const handleAddToCart = (event: SyntheticEvent) => {
    event.preventDefault();
    addToCart({
      title: product.title,
      price: product.price,
      quantity: counter,
      id: product.id,
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  };

  return (
    <div className="ProductViewItemsOrder">
      <div className="ProductViewItemsOrder__itemsCount ">
        <button onClick={handleSubtract}>-</button>
        <p className="text-white">{counter}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <form className=".ProductViewItemsOrder__form" onSubmit={handleSubmit}>
        <button
          className="ProductViewItemsOrder__submit"
          type="submit"
          onClick={handleAddToCart}
        >
          <FaCartShopping className="w-6 h-6" />
          <span className="text-xs">Add to cart</span>
        </button>
      </form>
    </div>
  );
};
