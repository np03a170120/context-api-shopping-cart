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
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </>
        ))}
      </>
    );
  };

  return (
    <div
      className={`h-dvh delay-100 transition-all fixed right-[-400px] top-0 w-[24rem] bg-gray-100 overflow-scroll ${isOnoffcanvas ? " !right-0 transition-all z-10 " : "z-[-1]"}`}
    >
      <button onClick={() => toggleCanvas()}>close btn</button>
      <button onClick={() => emptyCart()}>Empty cart</button>
      <h1>offcanvas</h1>
      <AvailableCartItems />
      <h1>Total Items: {cartQuantity} </h1>
    </div>
  );
};

export default OffCanvas;
