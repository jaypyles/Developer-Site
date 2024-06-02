import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Homepage from "./common/Homepage";
import Footer from "./common/Footer";
import { routes } from "./data/Routes";
import React from "react";
import { useEffect } from "react";
import Layout from "./Layout";
import Posts from "./common/Posts";
import { HomepagePage, PostsPage } from "./Pages";

interface RedirectProps {
  location: string;
}

const RedirectToExternal: React.FC<RedirectProps> = ({ location }) => {
  useEffect(() => {
    window.location.replace(location);
  }, [location]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper flex justify-center">
        <div className="main">
          <Routes>
            <Route path="/" element={<HomepagePage />} />
            <Route path="/posts" element={<PostsPage />} />
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
    </BrowserRouter>
  );
}
