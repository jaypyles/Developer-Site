import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavbar from "./common/SiteNavbar";

const Layout = () => {
  return (
    <>
      <SiteNavbar />
      <Outlet />
    </>
  );
};

export default Layout;
