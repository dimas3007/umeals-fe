import React from "react";
import Brand from "../Brand";
import { Button } from "../ui";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ isAuthenticated = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(authActions.logout());
    navigate("/login");
  };

  const user = useSelector((state) => state.user.user);

  return (
    <header className="font-main flex justify-between items-center px-28 py-6 bg-gradient-radial from-slate-800 to-slate-900 text-slate-100">
      <Brand />
      <ul className="flex items-center gap-8 text-xs">
        <li className="text-lime-500">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/meals">Our Menu</Link>
        </li>
      </ul>
      {!isAuthenticated && (
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button text="Login" size="sm" />
          </Link>
          <Link to="/register">
            <Button text="Register" theme="green" size="sm" />
          </Link>
        </div>
      )}
      {isAuthenticated && (
        <div className="flex items-center gap-4">
          <div className="text-2xl px-6 py-2 border-r-2 border-slate-100">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="h-12 w-12 rounded-full relative overflow-hidden">
              <img
                src="/avatar/avatar.jpg"
                alt="fotoProfile"
                className="object-cover w-full h-full object-center"
              />
            </div>
            <div className="font-main text-rg font-medium">
              <Dropdown label={user.name} inline={true}>
                <Dropdown.Header>
                  <span className="block text-sm">{user.name}</span>
                  <span className="block text-sm font-medium truncate">
                    {user.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item icon={AiOutlineLogout} onClick={handleLogout}>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
