import { X } from "@phosphor-icons/react";
import { useCartContext } from "../context/CartContext";
import { useOffCanvas } from "../context/OffCanvasContext";

const OffCanvas = () => {
  const { toggleCanvas, isOnoffcanvas } = useOffCanvas();
  const { cartItems, cartQuantity, emptyCart } = useCartContext();

  const AvailableCartItems = () => {
    return (
      <>
        {cartItems.map((item) => (
          <>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-6">
                <img
                  className="w-20 rounded-lg h-20 bg-gray-50"
                  src={item.images}
                  alt=""
                />
                <div>
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </div>
              <p>{item.quantity}</p>
            </div>
          </>
        ))}
      </>
    );
  };

  return (
    <div
      className={`h-dvh delay-100 p-4 transition-all fixed right-[-600px] top-0 w-[32rem] bg-gray-900 text-white overflow-scroll ${isOnoffcanvas ? " !right-0 transition-all z-10 " : "z-[-1]"}`}
    >
      <div
        onClick={() => toggleCanvas()}
        className=" cursor-pointer flex justify-end  w-full text-end"
      >
        <X size={32} />
      </div>

      <h1 className="text-lg text-center mb-6">CART</h1>
      <AvailableCartItems />
      <h1 className="text-lg mb-6">Total Items: {cartQuantity} </h1>
      <button
        className="bg-red-600 p-3 py-2 rounded-lg"
        onClick={() => emptyCart()}
      >
        Clear cart
      </button>
    </div>
  );
};

export default OffCanvas;
