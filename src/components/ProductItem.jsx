import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`product/${id}`} className="text-black cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="hover:scale-110 transition ease-in-out"
        />
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
}
