import { ShopContext } from "../context/ShopContext";
import { useContext, useState, useEffect } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

export default function LatestCollection() {
  const [latestProducts, setLatestProducts] = useState([]);
  const { products } = useContext(ShopContext);

  // Get the latest 10 products
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="Latest " text2="Collection" />
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
