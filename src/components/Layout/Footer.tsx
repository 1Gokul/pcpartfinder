import { Flex, Link } from "@chakra-ui/react";

const Footer = () => (
  <Flex
    paddingX={10}
    paddingY={5}
    direction="row"
    justifyContent={{ base: "space-between", md: "space-evenly" }}
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

export default Footer;
