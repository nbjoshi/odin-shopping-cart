export default function Hero() {
  return (
    <div
      className="relative flex items-center justify-start px-10 h-[30vh] sm:h-[40vh] lg:h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage: `url("https://img.hollisterco.com/is/image/anf/hco-20241231-HPB-D-HCO-Winter-Sale-USCA.png")`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full"></div>

      <div className="relative flex flex-col gap-6 text-white z-1 ml-10">
        <div className="flex items-center gap-2">
          <p className="w-8 md:w-11 h-[1px] bg-white"></p>
          <p className="font-semibold text-base md:text-lg cursor-pointer">
            Best Sellers
          </p>
        </div>
        <h1 className="raleway-font text-4xl sm:py-3 lg:text-6xl leading-relaxed cursor-pointer">
          New Arrivals
        </h1>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-base md:text-lg cursor-pointer">
            Shop Now
          </p>
          <p className="w-8 md:w-11 h-[1px] bg-white"></p>
        </div>
      </div>
    </div>
  );
}
