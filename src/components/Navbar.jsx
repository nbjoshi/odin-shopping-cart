import { assets } from "../assets/assets";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between font-medium px-4 sm:px-6 lg:px-8">
      <img
        src="https://download.logo.wine/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.png"
        alt="logo"
        className="w-36"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <ul className="hidden sm:flex gap-5 text-sm text-black">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="my cart" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="w-5 cursor-pointer sm:hidden "
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white z-50 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              alt="dropdown"
              className="h-4 rotate-180 cursor-pointer"
            />
            <p className="hover:text-black cursor-pointer">Back</p>
          </div>
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-black"
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-black"
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-black"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-black"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
