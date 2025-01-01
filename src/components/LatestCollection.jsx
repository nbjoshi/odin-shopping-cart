import { ShopContext } from "../context/ShopContext";
import { useContext, useState, useEffect } from "react";
import ProductItem from "./ProductItem";

export default function LatestCollection() {
  const [latestProducts, setLatestProducts] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <p className="inline-flex gap-2 items-center mb-3 text-3xl md: text-5xl lg:text-7xl font-bold">
          Latest Collection
        </p>
        <p className="text-black">Discover and Shop the Newest Trends Now.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.length ? (
          latestProducts.map((product) => (
            <ProductItem
              key={product._id}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
