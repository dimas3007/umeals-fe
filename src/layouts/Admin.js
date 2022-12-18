import { Outlet } from "react-router-dom";

import AdminHeader from "../components/header/AdminHeader.js";
import Sidebar from "../components/sidebar/Sidebar.js";
// import HeaderStats from "../components/header/HeaderStats";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 py-32">
        <AdminHeader />
        {/* Header */}
        {/* <HeaderStats className="mb-12 z-0" /> */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24 py-24">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
