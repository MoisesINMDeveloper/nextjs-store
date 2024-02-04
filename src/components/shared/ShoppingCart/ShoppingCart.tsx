"use client";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { FaShoppingCart } from "react-icons/fa";
import "../../../styles/globals.css";
export const ShoppingCart = () => {
  const { cart } = useShoppingCart();
  return (
    <button className="ShoppingCart">
      <span> {cart.length}</span>
      <FaShoppingCart />
    </button>
  );
};
