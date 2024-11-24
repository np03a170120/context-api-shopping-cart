import { Link, Outlet } from "@tanstack/react-router";

const Navbar = () => {
  const active_url = "bg-gray-800 rounded-full text-white";
  return (
    <>
      <nav className="p-4 sticky top-0 flex gap-2 text-gray-500 shadow-sm bg-white w-full text-md">
        <Link
          to="/"
          activeProps={{
            className: `${active_url}`,
          }}
          activeOptions={{ exact: true }}
          className="px-3 py-1"
        >
          Home
        </Link>{" "}
        <Link
          className="px-3 py-1"
          to="/store"
          activeProps={{
            className: `${active_url}`,
          }}
        >
          Store
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
