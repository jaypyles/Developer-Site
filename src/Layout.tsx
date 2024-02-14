import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface LayoutProps {
  children: ReactJSXElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
