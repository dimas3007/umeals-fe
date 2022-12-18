import { useState } from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "../dropdown/NotificationDropdown";
import UserDropdown from "../dropdown/UserDropdown";
import { FaBars, FaTimes, FaTv, FaTools, FaTable } from "react-icons/fa";
import {
  MdFoodBank,
  MdFastfood,
  MdCalendarToday,
  MdPeopleAlt,
  MdHistory,
} from "react-icons/md";
import Brand from "../Brand";

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = useState("hidden");

  return (
    <>
      <nav className="font-main md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars />
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            <Brand />
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    <Brand />
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block flex items-center " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <FaTv
                    className={`mr-2 text-sm ${
                      window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300"
                    }`}
                  />{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block flex items-center " +
                    (window.location.href.indexOf("/admin/setting") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/setting"
                >
                  <FaTools
                    className={`mr-2 text-sm ${
                      window.location.href.indexOf("/admin/setting") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300"
                    }`}
                  />{" "}
                  Setting
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block flex items-center " +
                    (window.location.href.indexOf("/admin/table") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/table"
                >
                  <FaTable
                    className={`mr-2 text-sm ${
                      window.location.href.indexOf("/admin/table") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300"
                    }`}
                  />{" "}
                  Tables
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Manage Data Menu
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-blueGray-700 flex items-center hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/admin/ingredients"
                >
                  <MdFoodBank className="text-blueGray-400 mr-2 text-sm" />
                  Ingredients
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 flex items-center hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/admin/meals"
                >
                  <MdFastfood className="text-blueGray-400 mr-2 text-sm" />
                  Meal
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 flex items-center hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/admin/plans"
                >
                  <MdCalendarToday className="text-blueGray-400 mr-2 text-sm" />
                  Plans
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 flex items-center hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/admin/users"
                >
                  <MdPeopleAlt className="text-blueGray-400 mr-2 text-sm" />
                  Users
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 flex items-center hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/admin/history-order"
                >
                  <MdHistory className="text-blueGray-400 mr-2 text-sm" />
                  History Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
