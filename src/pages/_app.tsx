import { AppProps } from "next/app";
import localFont from 'next/font/local'
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import "focus-visible/dist/focus-visible";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import {
  Hydrate,
  QueryCache,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

import customTheme from "../styles/theme";
import { handleQueryError } from "../shared/utils/common/handleQueryError";

const monaFont = localFont({ src: "../assets/fonts/Mona-Sans.woff2" });

// https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9
const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState<QueryClient>(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: handleQueryError
        }),
        defaultOptions: {
          queries: { retry: 0, staleTime: 86400000 } // Becomes stale after a day
        }
      })
  );
  return (
    <>
      <style jsx global>{`
        :root {
          --font-base: ${monaFont.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider theme={customTheme}>
            <Toaster position="top-right" gutter={8} />
            <Global styles={GlobalStyles} />
            <Component {...pageProps} />
          </ChakraProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
