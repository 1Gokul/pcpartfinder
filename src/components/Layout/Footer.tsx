import { Flex, Link } from "@chakra-ui/react";

const Footer: React.FC = () => (
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

export default Footer;
