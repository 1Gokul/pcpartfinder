import { Flex, Text } from "@chakra-ui/react"
import Link from "next/link"
import Head from "next/head"
import Header from "./Header"

const description = "Search for PC components and peripherals from all major Indian stores!"

const Layout = props => (
  <Flex direction="column" margin="0 auto">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="@1GokulV" key="twhandle" />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}${props.page}`} key="ogurl" />
      {/* <meta property="og:image" content={previewImage} key="ogimage" /> */}
      <meta property="og:site_name" content="PCPartFinder" key="ogsitename" />
      <meta property="og:title" content={props.title.split("-").join(" ")} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <title>{props.title} - PCPartFinder</title>
    </Head>

    <Header />
    {props.children}
    <Footer />
  </Flex>
)

export default Layout

export const Container = props => (
  <Flex
    direction="column"
    marginX="auto"
    marginTop={5}
    minH="70vh"
    minW="70vw"
    maxW={{ base: "95vw", md: "75vw" }}
    padding={{ base: 5, md: 10 }}
    {...props}
  >
    {props.children}
  </Flex>
)

const Footer = () => (
  <Flex paddingX={10} paddingY={5} direction={{ base:"column", md:"row" }} justifyContent="space-evenly">
    <Text>
      {new Date ().getFullYear ()} Gokul Viswanath
    </Text>
    <Link href="https://github.com/1Gokul/pcpartfinder">GitHub repo</Link>
  </Flex>
)
