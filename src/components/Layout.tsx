import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { css } from "@emotion/react";

import Header from "./Header/Header";
import { Flex } from "./StyledComponents";
import { mq } from "../../styles/styleConfig";

const description =
  "Search for PC components and peripherals from major Indian stores!";

type LayoutProps = {
  title: string;
  page: string;
  children: React.ReactNode;
};

const Layout = ({ title, page, children }: LayoutProps) => {
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
    <Flex flexDirection="column" margin="0 auto">
      {/* For SEO */}
      <SEO page={page} title={title} />

      {/* Navbar */}
      <Header />

      {children}
      {/* <BackToTop visible={backToTopVisible} /> */}

      <Footer />
    </Flex>
  );
};

export default Layout;

type SEOProps = {
  page: string;
  title: string;
};

const SEO = ({ page, title }: SEOProps) => (
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
      content={`${process.env.NEXT_PUBLIC_SITE_URL}${page}`}
      key="ogurl"
    />
    <meta
      property="og:title"
      content={title.split("-").join(" ")}
      key="ogtitle"
    />

    <title>{title} - PCPartFinder</title>
  </Head>
);

// // Back to top button
// type BackToTopProps {
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

type ContainerProps = {
  children: React.ReactNode;
};
export const Container = ({ children, ...otherProps }: ContainerProps) => {
  return (
    <Flex
      flexDirection="column"
      margin="1.25rem auto 0"
      padding="1.25rem"
      css={css`
        min-height: 80vh;
        min-width: 75vw;
        max-width: 95vw;

        ${mq["md"]} {
          padding: 2.5rem;
          max-width: 75vw;
        }
      `}
      {...otherProps}
    >
      {children}
    </Flex>
  );
};

const Footer = () => (
  <Flex
    padding="2.5rem 4rem"
    flexDirection="row"
    justifyContent="space-between"
    css={css`
      ${mq["md"]} {
        justify-content: space-evenly;
        padding: 2rem 1.25rem;
      }
    `}
  >
    <a target="_blank" href="https://gokulv.netlify.app" rel="noreferrer">
      Gokul Viswanath
    </a>
    <a
      target="_blank"
      href="https://github.com/1Gokul/pcpartfinder"
      rel="noreferrer"
    >
      GitHub repo
    </a>
  </Flex>
);
