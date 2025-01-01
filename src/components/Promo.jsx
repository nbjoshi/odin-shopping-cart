export default function Promo() {
  return (
    <>
      <div
        className="relative h-[55vh] sm:h-[65vh] lg:h-[75vh] my-20"
        style={{
          backgroundImage:
            'url("https://wallpapersok.com/images/hd/snow-aesthetic-field-ngztdk7ep6rew89u.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col gap-4 px-4">
          <p className="font-bold text-2xl sm:text-3xl">The Winter Sale</p>
          <p className="font-semibold text-sm sm:text-base">
            ENJOY AN EXTRA 40% OFF SELECT SALE STYLES
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4 sm:gap-4">
            <button className="min-w-[150px] rounded-full bg-transparent border-2 border-white text-white px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base hover:bg-white hover:text-black transition duration-300">
              MEN
            </button>
            <button className="min-w-[150px] rounded-full bg-transparent border-2 border-white text-white px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base hover:bg-white hover:text-black transition duration-300">
              WOMEN
            </button>
            <button className="min-w-[150px] rounded-full bg-transparent border-2 border-white text-white px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base hover:bg-white hover:text-black transition duration-300">
              KIDS AND BABY
            </button>
            <button className="min-w-[150px] rounded-full bg-transparent border-2 border-white text-white px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base hover:bg-white hover:text-black transition duration-300">
              HOME
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
