import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import { VscArrowUp } from "react-icons/vsc";
import { animateScroll } from "react-scroll";

import Header from "./Header";

const description =
  "Search for PC components and peripherals from major Indian stores!";

const Layout = props => {

  /* For the "Back To Top" button. It appears after scrolling down
  a bit and disappears when we scroll to the top. */
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  const scrollListener = useCallback(
    () => {
      const scrollAmount =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = scrollAmount / height;

      if (scrolled > 0.1) {
        if (!backToTopVisible) setBackToTopVisible(true);
      } else if (scrolled < 0.001) {
        if (backToTopVisible) setBackToTopVisible(false);
      }
    },
    [backToTopVisible]
  );

  useEffect(
    () => {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    },
    [scrollListener]
  );


  return (
    <Flex
      direction="column"
      margin="0 auto"
    >
      {/* For SEO */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@1GokulV" key="twhandle" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/og_image.jpg`}
          key="ogimage"
        />
        <meta property="og:site_name" content="PCPartFinder" key="ogsitename" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}${props.page}`}
          key="ogurl"
        />
        <meta
          property="og:title"
          content={props.title.split("-").join(" ")}
          key="ogtitle"
        />

        <title>{props.title} - PCPartFinder</title>
      </Head>

      {/* Navbar */}
      <Header />

      {props.children}
      <BackToTop visible={backToTopVisible} />

      <Footer />

    </Flex>
  );
};

export default Layout;

const BackToTop = ({ visible }) => (
  <IconButton
    colorScheme="cyan"
    icon={<VscArrowUp />}
    position="fixed"
    right={{ base: "50px", md: "70px" }}
    bottom={{ base: "50px", md: "100px" }}
    display={visible ? "flex" : "none"}
    onClick={() => animateScroll.scrollToTop()}
    _hover={{ bgColor: "cyan.600", color: "gray.100" }}
    _active={{
      bgColor: "cyan.700",
      color: "gray.100",
    }}
  />
);

export const Container = props => (
  <Flex
    direction="column"
    marginX="auto"
    marginTop={5}
    minH="80vh"
    minW="75vw"
    maxW={{ base: "95vw", md: "75vw" }}
    padding={{ base: 5, md: 10 }}
    {...props}
  >
    {props.children}
  </Flex>
);

const Footer = () => (
  <Flex
    paddingX={10}
    paddingY={5}
    direction="row"
    justifyContent={{ base: "space-between", md: "space-evenly" }}
  >
    <Link href="https://gokulv.netlify.app">Gokul Viswanath</Link>
    <Link href="https://github.com/1Gokul/pcpartfinder">GitHub repo</Link>
  </Flex>
);
