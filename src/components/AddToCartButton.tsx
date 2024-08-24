"use client";
import { useDispatch } from "react-redux";
import { ProductType } from "../../type";
import { addToCart } from "@/redux/shofySlice";
interface Props {
  product: ProductType;
}

const AddToCartButton = ({ product }: Props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-transparent border border-skyColor text-black tracking-wide text-sm py-1.5 hover:bg-skyColor mt-2 rounded-full hover:text-white duration-300"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
