export default function Footer() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 my-10 mt-34 text-sm">
        <div>
          <img
            src="https://download.logo.wine/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.png"
            className="mb-4 w-32"
            alt="logo"
          />
          <p className="w-full text-gray-400">
            Your one-stop shop for amazing deals and exclusive products
          </p>
          <p className="w-full text-gray-400 mt-8 border-b-2 pb-2">
            Connect With Us
          </p>
          <div className="flex gap-4 mt-4">
            <img
              className="h-7 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/1946/1946552.png"
              alt="Tiktok icon"
            />
            <img
              className="h-7 cursor-pointer"
              src="https://icons.veryicon.com/png/o/miscellaneous/offerino-icons/instagram-53.png"
              alt="Instagram icon"
            />
            <img
              className="h-7 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/152/152810.png"
              alt="Youtube icon"
            />
            <img
              className="h-7 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/174/174870.png"
              alt="Snapchat icon"
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-gray-600">About us</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li className="hover:text-gray-600 cursor-pointer">
              Brand Protection
            </li>
            <li className="hover:text-gray-600 cursor-pointer">
              Join Our Creator Network
            </li>
            <li className="hover:text-gray-600 cursor-pointer">Careers</li>
            <li className="hover:text-gray-600 cursor-pointer">
              Accessibility
            </li>
            <li className="hover:text-gray-600 cursor-pointer">
              Inclusion & Diversity
            </li>
            <li className="hover:text-gray-600 cursor-pointer">
              Sustainability
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-gray-600">Help</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li className="hover:text-gray-600 cursor-pointer">
              Customer Help
            </li>
            <li className="hover:text-gray-600 cursor-pointer">
              About Forever House Rewards
            </li>
            <li className="hover:text-gray-600 cursor-pointer">Order Help</li>
            <li className="hover:text-gray-600 cursor-pointer">
              Shipping and Handling
            </li>
            <li className="hover:text-gray-600 cursor-pointer">
              Online Returns
            </li>
            <li className="hover:text-gray-600 cursor-pointer">
              Track My Order
            </li>
            <li className="hover:text-gray-600 cursor-pointer">
              Cards & E-Cards
            </li>
            <li className="hover:text-gray-600 cursor-pointer">
              Student Discount
            </li>
            <li className="hover:text-gray-600 cursor-pointer">FAQs</li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="flex flex-col gap-6 text-gray-400">
            <li className="flex items-center gap-2 hover:text-gray-600 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2611/2611152.png"
                className="w-7"
              />
              Gift Cards
            </li>
            <li className="flex items-center gap-2 hover:text-gray-600 cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/38705/location-pin.svg"
                className="w-7"
              />
              Find a Store
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-xl.png"
                className="w-7"
              />
              <span className="font-bold">United States</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <ul className="flex flex-wrap gap-1 text-gray-400 text-sm mt-5 mb-5 pt-2 pb-20">
          <li className="underline hover:text-gray-600 cursor-pointer">
            Privacy/Ad Cookies
          </li>
          <li className="border-l border-gray-400 pl-2 underline hover:text-gray-600 cursor-pointer">
            Sale Terms
          </li>
          <li className="border-l border-gray-400 pl-2 underline hover:text-gray-600 cursor-pointer">
            Text Terms
          </li>
          <li className="border-l border-gray-400 pl-2 underline hover:text-gray-600 cursor-pointer">
            Forever House Rewards Terms
          </li>
          <li className="border-l border-gray-400 pl-2 underline hover:text-gray-600 cursor-pointer">
            Website Terms of Use
          </li>
          <li className="border-l border-gray-400 pl-2 underline hover:text-gray-600 cursor-pointer">
            Endorsements Social Media Engagement
          </li>
          <li className="border-l border-gray-400 pl-2 underline hover:text-gray-600 cursor-pointer">
            Site Map
          </li>
        </ul>
      </div>
    </div>
  );
}
