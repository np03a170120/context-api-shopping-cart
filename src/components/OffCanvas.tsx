import { useCartContext } from "../context/CartContext";
import { useOffCanvas } from "../context/OffCanvasContext";

const OffCanvas = () => {
  const { toggleCanvas } = useOffCanvas();
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
    <div className="h-dvh  fixed right-0 top-0 w-[24rem] bg-gray-100 overflow-scroll">
      <button onClick={() => toggleCanvas()}>close btn</button>
      <button onClick={() => emptyCart()}>Empty cart</button>
      <h1>offcanvas</h1>
      <AvailableCartItems />
      <h1>Total Items: {cartQuantity} </h1>
    </div>
  );
};

export default OffCanvas;
