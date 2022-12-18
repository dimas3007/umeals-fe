import React from "react";
import Brand from "../Brand";
import { Button } from "../ui";
import { FaAngleDown, FaShoppingCart } from "react-icons/fa";

const Header = ({ isAuthenticated = true }) => {
  return (
    <header className="font-main flex justify-between items-center px-28 py-6 bg-gradient-radial from-slate-800 to-slate-900 text-slate-100">
      <Brand />
      <ul className="flex items-center gap-8 text-xs">
        <li className="text-lime-500">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="#">Our Menu</a>
        </li>
      </ul>
      {!isAuthenticated && (
        <div className="flex items-center gap-4">
          <Button text="Login" size="sm" />
          <Button text="Register" theme="green" size="sm" />
        </div>
      )}
      {isAuthenticated && (
        <div className="flex items-center gap-4">
          <div className="text-2xl px-6 py-2 border-r-2 border-slate-100">
            <FaShoppingCart />
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="h-12 w-12 rounded-full relative overflow-hidden">
              <img
                src="/avatar/avatar.jpg"
                alt="fotoProfile"
                className="object-cover w-full h-full object-center"
              />
            </div>
            <div>
              <h2 className="text-rg font-medium">Dimas Setiaji</h2>
              <p className="text-sm text-gray-500">@dimasseti</p>
            </div>
            <FaAngleDown />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
