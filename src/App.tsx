import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Homepage from "./common/Homepage";
import { Navbar } from "./common/Navbar";
import Footer from "./common/Footer";
import { routes } from "./data/Routes";
import React from "react";
import { useEffect } from "react";

interface RedirectProps {
  location: string;
}

const RedirectToExternal: React.FC<RedirectProps> = ({ location }) => {
  useEffect(() => {
    window.location.href = location;
  }, [location]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper flex justify-center">
        <div className="main">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            {routes.map((data, index) => (
              <Route
                key={index}
                path={data.path}
                element={<RedirectToExternal location={data.to} />}
              />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
