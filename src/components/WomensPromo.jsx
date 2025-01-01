import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";

export default function WomensPromo() {
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSmallViewport(true);
      } else {
        setIsSmallViewport(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePause = () => {
    const videoElement = document.querySelector(".js-video");
    if (videoElement) {
      if (isPaused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="relative">
      {isSmallViewport ? (
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
            src="https://img.hollisterco.com/is/content/anf/hco-20241203-M-HP-GillyLounge.mp4"
            type="video/mp4"
          ></video>
          <button
            className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75 transition duration-300"
            onClick={togglePause}
          >
            <i className={`fa-solid ${isPaused ? "fa-play" : "fa-pause"}`}></i>
          </button>
        </div>
      ) : (
        <img
          className="w-full h-full object-cover"
          src="https://img.hollisterco.com/is/image/anf/hco-20241203-D-HP-GillyLounge.png"
          alt="Fallback"
        />
      )}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white z-10 gap-4">
        <p className="text-2xl">Zara Comfort</p>
        <p className="text-4xl font-semibold">Homebody Mode</p>
        <p className="text-center text-lg w-2/5">
          Loungewear that looks great but feels like you never left the bed.
        </p>
        <button className="mt-4 bg-transparent text-white border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
          Shop Women's
        </button>
      </div>
    </div>
  );
}
