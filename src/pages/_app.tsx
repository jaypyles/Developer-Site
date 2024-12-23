import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { Navbar } from "@/components/nav/navbar/navbar";

import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Jayden Pyles</title>
      </Head>

      <div className="main-wrapper flex justify-center h-full">
        <div className="main">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default App;
