import { IconButton } from "@chakra-ui/react";
import { VscArrowUp } from "react-icons/vsc";
import { animateScroll } from "react-scroll";

const BackToTop = ({ visible }: { visible: boolean }) => (
  <IconButton
    display={visible ? "flex" : "none"}
    colorScheme="cyan"
    icon={<VscArrowUp />}
    position="fixed"
    right={{ base: "50px", md: "70px" }}
    bottom={{ base: "50px", md: "100px" }}
    _hover={{ bgColor: "cyan.600", color: "gray.100" }}
    _active={{
      bgColor: "cyan.700",
      color: "gray.100"
    }}
    aria-label="Click on this button to scroll to the top of the page."
    onClick={() => animateScroll.scrollToTop()}
  />
);

export default BackToTop;
