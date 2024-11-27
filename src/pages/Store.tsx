import { useEffect, useState } from "react";
import StoreItem from "../components/StoreItem";
import { Products } from "../types/Products";
import Pagination from "../components/Pagination";

const Store = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(8);

  async function fetchProduct() {
    const response = await fetch("https://dummyjson.com/products?&skip=20");
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const lastProductIndex = currentPage * productsPerPage;
  const firtsProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firtsProductIndex, lastProductIndex);

  return (
    <div className="container mx-auto text-center my-4">
      <div className="grid grid-cols-4 gap-5 mb-4">
        {currentProducts.map((product) => (
          <StoreItem key={product.id} {...product} />
        ))}
      </div>
      <Pagination
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Store;
