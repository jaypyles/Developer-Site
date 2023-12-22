import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Homepage from "./common/Homepage";
import { Navbar } from "./common/Navbar";
import Footer from "./common/Footer";
import { routes } from "./data/Routes";

const RedirectToExternal = ({ location }) => {
  window.location.href = location;
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
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
      <Footer />
    </BrowserRouter>
  );
}
