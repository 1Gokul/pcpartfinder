import { AppProps } from "next/app";
import "@fontsource/inter/variable-full.css";

import { GlobalStyles } from "../styles/global";
// import { useState } from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
