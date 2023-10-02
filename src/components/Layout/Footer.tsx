import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";

const Footer = () => (
  <Flex
    paddingX={10}
    paddingY={5}
    direction="row"
    justifyContent={{ base: "space-between", md: "space-evenly" }}
  >
    <Link target="_blank" href="https://gokulv.netlify.app" rel="noreferrer">
      Gokul Viswanath
    </Link>
    <Link
      target="_blank"
      href="https://github.com/1Gokul/pcpartfinder"
      rel="noreferrer"
    >
      GitHub repo
    </Link>
  </Flex>
);

export default Footer;
