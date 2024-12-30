import Title from "./Title";
import Model1 from "../assets/Model1.jpg";
import Model2 from "../assets/AEModel.png";
import { useState, useEffect } from "react";

export default function NewArrivals() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="my-6">
      <div className="text-center py-8 text-3xl">
        <Title text1="Newest " text2="Arrivals" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-6">
        <div className="text-center">
          <img src={Model2} className="w-4/5 h-auto mx-auto shadow-xl" />
          <h1 className="mt-6 font-semibold text-3xl">
            Baggy Hoodies and Sweatpants
          </h1>
          <p className="mt-2 text-gray-600">
            Because Zara Feel Good Fleece is all anyone really wants to wear
            over holiday break.
          </p>
          {isSmallScreen ? (
            <button className="mt-3 px-4 py-2 text-black border-4 border-black rounded-full cursor-pointer hover:bg-black hover:text-white">
              Men's New Arrival
            </button>
          ) : (
            <p className="text-gray-600 underline mt-3 cursor-pointer">
              Men's New Arrival
            </p>
          )}
        </div>
        <div className="text-center">
          <img src={Model1} className="w-4/5 h-auto mx-auto shadow-xl" />
          <h1 className="mt-6 font-semibold text-3xl">Elegant Dresses</h1>
          <p className="mt-2 text-gray-600">
            Soft fabrics for every occasion, because comfort meets style this
            season.
          </p>
          {isSmallScreen ? (
            <button className="mt-3 px-4 py-2 text-black border-4 rounded-full border-black cursor-pointer hover:bg-black hover:text-white">
              Women's New Arrival
            </button>
          ) : (
            <p className="text-gray-600 underline mt-3 cursor-pointer">
              Women's New Arrival
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
