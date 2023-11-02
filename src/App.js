import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./common/Homepage";
import Setup from "./common/Setup";
import { Navbar } from "./common/Navbar";
import Footer from "./common/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/setup" element={<Setup />} />
          {/* <Route path="/code_blog" element={<CodeBlog />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
