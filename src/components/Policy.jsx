import { assets } from "../assets/assets";

export default function Policy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-black border-b-2 border-t-2 border-gray-300 ">
      <div>
        <img
          src={assets.exchange_icon}
          alt="exchange icon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">
          Enjoy a seamless shopping experience with our hassle-free exchange
          policy
        </p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          alt="quality icon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">
          We provide a 7-day window to request a refund, no questions asked
        </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          alt="support icon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">
          Our dedicated team is here for you 24/7, ready to assist with any
          questions or concerns at any time
        </p>
      </div>
    </div>
  );
}
