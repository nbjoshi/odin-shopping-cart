import { useState, useEffect } from "react";

const promoData = [
  "Our favorite tops: now $25 & up!",
  "Need It Now Sale: 40-60% off clearance, new styles added!",
  "Jeans & joggers under $30, for a limited time!",
];

export default function PromoBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const shopNow = (
    <p className="underline text-white text-sm cursor-pointer">Shop Now</p>
  );

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

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % promoData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNextOrPrevious = (next) => {
    setActiveIndex((prevIndex) => {
      const itemCount = promoData.length;
      if (next) {
        return (prevIndex + 1) % itemCount;
      } else {
        return (prevIndex - 1 + itemCount) % itemCount;
      }
    });
  };

  return (
    <div className="flex justify-center bg-black h-16 relative">
      <div className="flex items-center w-2/3">
        {!isSmallScreen && (
          <button
            type="button"
            onClick={() => handleNextOrPrevious(false)}
            className="px-4 py-2 cursor-pointer text-white relative z-10"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
        )}
        <div className="flex-1 flex items-center justify-center overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              width: `${promoData.length * 100}%`,
            }}
          >
            {promoData.map((item, index) => (
              <div
                key={index}
                className="w-full flex justify-center gap-2 flex-shrink-0 text-center"
                style={{ flex: "0 0 100%" }}
              >
                <p className="text-center text-white text-sm">{item}</p>
                {shopNow}
              </div>
            ))}
          </div>
        </div>
        {!isSmallScreen && (
          <button
            type="button"
            onClick={() => handleNextOrPrevious(true)}
            className="px-4 py-2 cursor-pointer text-white relative z-10"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        )}
      </div>
      {!isSmallScreen && (
        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="ml-4 px-4 py-2 cursor-pointer text-white relative z-10"
        >
          <i className={`fa-solid ${isPaused ? "fa-play" : "fa-pause"}`}></i>
        </button>
      )}
      <div className="absolute bottom-2 flex space-x-2 border-none">
        {promoData.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
