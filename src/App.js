import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Homepage from "./common/Homepage";
import { Navbar } from "./common/Navbar";
import Footer from "./common/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
