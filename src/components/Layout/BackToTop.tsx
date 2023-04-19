import { IconButton } from "@chakra-ui/react";
import { RxArrowUp } from "react-icons/rx";
import { animateScroll } from "react-scroll";

const BackToTop = ({ visible }: { visible: boolean }) => (
  <IconButton
    display={visible ? "flex" : "none"}
    colorScheme="green"
    icon={<RxArrowUp />}
    position="fixed"
    color="green.1100"
    right={{ base: "50px", md: "70px" }}
    bottom={{ base: "50px", md: "100px" }}
    _hover={{ bgColor: "green.600" }}
    _active={{
      bgColor: "green.700"
    }}
    aria-label="Click on this button to scroll to the top of the page."
    onClick={() => animateScroll.scrollToTop()}
  />
);

export default BackToTop;
