import { Flex } from "@chakra-ui/react";
import { useState, useCallback, useEffect } from "react";

import Header from "./Header";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import SEO from "./SEO";

interface LayoutProps {
  title: string;
  page: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { title, page, children } = props;

  /* For the "Back To Top" button. It appears after scrolling down
    a bit and disappears when we scroll to the top. */
  const [backToTopVisible, setBackToTopVisible] = useState<boolean>(false);

  const scrollListener = useCallback(() => {
    const scrollAmount =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollAmount > 100) {
      if (!backToTopVisible) setBackToTopVisible(true);
    } else if (scrollAmount < 100) {
      if (backToTopVisible) setBackToTopVisible(false);
    }
  }, [backToTopVisible]);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);

  return (
    <Flex direction="column" margin="0 auto">
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
export default Layout;
