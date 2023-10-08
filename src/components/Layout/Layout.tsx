import { Flex } from "@chakra-ui/react";
import { useState, useCallback, useEffect } from "react";

import { BackToTop } from "./BackToTop";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import { SEO } from "./SEO";

export const Layout = ({
  children,
  title,
  page
}: {
  children: React.ReactNode;
  title: string;
  page: string;
}) => {
  /* For the "Back To Top" button. It appears after scrolling down
    a bit and disappears when we scroll to the top. */
  const [backToTopVisible, setBackToTopVisible] = useState<boolean>(false);

  const scrollListener = useCallback(() => {
    const scrollAmount =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollAmount > 100) {
      if (!backToTopVisible) setBackToTopVisible(true);
    } else if (scrollAmount < 100 && backToTopVisible) {
      setBackToTopVisible(false);
    }
  }, [backToTopVisible]);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);

  return (
    <Flex direction="column" margin="0 auto" position="relative">
      {/* For SEO */}
      <SEO page={page} title={title} />

      {/* Navbar */}
      <Header />

      {children}

      <BackToTop visible={backToTopVisible} />

      <Footer />
    </Flex>
  );
};
