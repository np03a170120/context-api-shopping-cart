import { useEffect, useState } from "react";
import StoreItem from "../components/StoreItem";
import { Products } from "../types/Products";

const Store = () => {
  const [products, setProducts] = useState<Products[]>([]);

  async function fetchProduct() {
    const response = await fetch("https://dummyjson.com/products?&skip=20");
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mx-auto text-center my-4">
      <div className="grid grid-cols-4  gap-5">
        {products.map((product) => (
          <StoreItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
