import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
// import { VscArrowUp } from "react-icons/vsc";
// import { animateScroll } from "react-scroll";

import Header from "./Header/Header";
import { Flex } from "./StyledComponents";
import { css } from "@emotion/react";
import { mq } from "../../styles/styleConfig";

const description =
  "Search for PC components and peripherals from major Indian stores!";

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
    <Flex
      flexDirection="column"
      css={css`
        margin: 0 auto;
      `}
    >
      {/* For SEO */}
      <SEO page={page} title={title} />

      {/* Navbar */}
      <Header />

      {children}
      {/* 
      <BackToTop visible={backToTopVisible} />

      <Footer /> */}
    </Flex>
  );
};

export default Layout;

interface SEOProps {
  page: string;
  title: string;
}

const SEO: React.FC<SEOProps> = (props) => (
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
);

// // Back to top button
// interface BackToTopProps {
//   visible: boolean;
// }

// const BackToTop: React.FC<BackToTopProps> = ({ visible }) => (
//   <IconButton
//     display={visible ? "flex" : "none"}
//     colorScheme="cyan"
//     icon={<VscArrowUp />}
//     position="fixed"
//     right={{ base: "50px", md: "70px" }}
//     bottom={{ base: "50px", md: "100px" }}
//     _hover={{ bgColor: "cyan.600", color: "gray.100" }}
//     _active={{
//       bgColor: "cyan.700",
//       color: "gray.100"
//     }}
//     aria-label="Click on this button to scroll to the top of the page."
//     onClick={() => animateScroll.scrollToTop()}
//   />
// );

interface ContainerProps {
  // Other style props
  [OtherProps: string]: unknown;
}
export const Container: React.FC<ContainerProps> = (props) => {
  const { children, otherProps } = props;
  return (
    <Flex
      margin="50px auto 0"
      padding="20px"
      css={css`
        min-height: 80vh;
        min-width: 75vw;
        max-width: 95vw;

        ${mq["md"]} {
          padding: 30px;
          max-width: 75vw;
        }
      `}
      {...otherProps}
    >
      {children}
    </Flex>
  );
};

// const Footer: React.FC = () => (
//   <Flex
//     paddingX={10}
//     paddingY={5}
//     direction="row"
//     justifyContent={{ base: "space-between", md: "space-evenly" }}
//   >
//     <Link href="https://gokulv.netlify.app">Gokul Viswanath</Link>
//     <Link href="https://github.com/1Gokul/pcpartfinder">GitHub repo</Link>
//   </Flex>
// );
