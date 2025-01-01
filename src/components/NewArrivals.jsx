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
    <div className="my-6 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-6">
        <div className="text-center">
          <img src={Model2} className="w-4/5 h-auto mx-auto" />
          <div className="flex flex-col items-center gap-2">
            <h1 className="mt-6 font-semibold text-3xl">
              Baggy Hoodies and Sweatpants
            </h1>
            <p className="mt-2 text-black w-3/5 mx-auto">
              Because Zara Feel Good Fleece is all anyone really wants to wear
              over holiday break.
            </p>
            {isSmallScreen ? (
              <button className="mt-3 px-4 py-2 text-black border-4 border-black rounded-full cursor-pointer hover:bg-black hover:text-white">
                Men's New Arrival
              </button>
            ) : (
              <p className="text-black underline mt-3 cursor-pointer">
                Men's New Arrival
              </p>
            )}
          </div>
        </div>
        <div className="text-center">
          <img src={Model1} className="w-4/5 h-auto mx-auto" />
          <div className="flex flex-col items-center gap-2">
            <h1 className="mt-6 font-semibold text-3xl">Elegant Dresses</h1>
            <p className="mt-2 text-black w-3/5 mx-auto">
              Soft fabrics for every occasion, because comfort meets style this
              season.
            </p>
            {isSmallScreen ? (
              <button className="mt-3 px-4 py-2 text-black border-4 rounded-full border-black cursor-pointer hover:bg-black hover:text-white">
                Women's New Arrival
              </button>
            ) : (
              <p className="text-black underline mt-3 cursor-pointer">
                Women's New Arrival
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
