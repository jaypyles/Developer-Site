import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";


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
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default App;
