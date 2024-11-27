import { ShoppingBag } from "@phosphor-icons/react";
import { Link, Outlet } from "@tanstack/react-router";
import { useCartContext } from "../context/CartContext";
import { useOffCanvas } from "../context/OffCanvasContext";
import navLinks from "../data/NavigationLinks.json";
import OffCanvas from "./OffCanvas";

const Navbar = () => {
  const active_url = "bg-gray-800 rounded-full text-white";
  const { cartQuantity } = useCartContext();
  const { toggleCanvas } = useOffCanvas();
  return (
    <>
      <nav className="p-4 sticky items-center top-0 flex gap-2 justify-between text-gray-500 shadow-sm bg-white w-full text-md">
        <div>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={`${item.link}`}
              activeProps={{
                className: `${active_url}`,
              }}
              activeOptions={{ exact: true }}
              className="px-3 py-1"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => toggleCanvas()}
          className="bg-gray-900 p-2  cursor-pointer text-white rounded-full"
        >
          <ShoppingBag size={24} />
          <div className="absolute text-center rounded-full top-[10%] right-[0.5%]  bg-red-500 h-[1.5rem] w-[1.5rem] z-10">
            {cartQuantity}
          </div>
        </div>
      </nav>
      <OffCanvas />
      <Outlet />
    </>
  );
};

export default Navbar;
