import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Resume from "./resume/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
