import React from "react";
import Navbar from "src/common/Navbar";
import Homepage from "src/common/Homepage";
import CurrentTheme from "src/common/CurrentTheme";

const Home = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <CurrentTheme></CurrentTheme>
    </>
  );
};

export default Home;
