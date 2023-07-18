import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavbar from "./common/SiteNavbar";
import Header from "./common/Header";

const Layout = () => {
  return (
    <>
      <SiteNavbar />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
