import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./common/Homepage";
import Setup from "./common/Setup";
import { Navbar } from "./common/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/code_blog" element={<CodeBlog />} /> */}
          <Route path="/setup" element={<Setup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
