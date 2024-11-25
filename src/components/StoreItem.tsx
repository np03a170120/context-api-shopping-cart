import { useState } from "react";
import { Products } from "../types/Products";
import { useCartContext } from "../context/CartContext";

const StoreItem = (product: Products) => {
  const { addToCart, cartItems, removeFromCart } = useCartContext();
  const [isClickAddToCart, setIsClickedAddToCart] = useState(false);

  let item_quantity = cartItems.find(
    (item) => item.id === product.id
  )?.quantity;

  return (
    <div className="shadow rounded-md flex  flex-col justify-between p-4 bg-white">
      <div>
        <img className="" src={product.images} alt="" />
        <div className="mb-4">
          <h1 className="font-semibold mb-1 text-lg text-gray-700">
            {product.title}
          </h1>
          <p className="text-gray-600">${product.price}</p>
        </div>
      </div>
      {!isClickAddToCart || item_quantity === undefined ? (
        <button
          onClick={() => {
            setIsClickedAddToCart(true);
            addToCart(product);
          }}
          className="bg-gray-800  p-2 text-sm rounded-lg  text-white mt-3 font-medium"
        >
          Add to Cart
        </button>
      ) : (
        <>
          <div className="flex w-full justify-center gap-4 items-center">
            <button
              className="bg-gray-800 text-white p-1 px-4  rounded-full"
              onClick={() => {
                removeFromCart(product);
                if (item_quantity! <= 1) {
                  setIsClickedAddToCart(false);
                }
              }}
            >
              -
            </button>
            <h1>{item_quantity}</h1>
            <button
              className="bg-gray-800 text-white p-1 px-4  rounded-full"
              onClick={() => addToCart(product)}
            >
              +
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StoreItem;
