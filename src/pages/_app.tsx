import { ChakraProvider } from "@chakra-ui/react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { AppProps } from "next/app";
import localFont from "next/font/local";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

import { theme } from "../styles/theme";
import { handleQueryError } from "../utils/common/handleQueryError";

const monaFont = localFont({ src: "../assets/fonts/Mona-Sans.woff2" });

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
        <ChakraProvider theme={theme}>
          <Toaster position="top-right" gutter={8} />
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
