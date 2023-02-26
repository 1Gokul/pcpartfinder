import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    p: "3",
    fontWeight: "medium",
    bg: "cyan.500",
    color: "gray.200",
    _hover: {
      bg: "cyan.600",
      color: "white"
    }
  },
  list: {
    // this will style the MenuList component
    p: 0,
    borderRadius: "none",
    bg: "gray.900",
    border: "2px solid cyan.500"
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    p: "3",
    color: "gray.200",
    _hover: {
      bg: "cyan.700"
    },
    _focus: {
      bg: "cyan.800"
    }
  },
  groupTitle: {
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    letterSpacing: "wider",
    opacity: "0.7"
  },
  command: {
    opacity: "0.8",
    fontFamily: "mono",
    fontSize: "sm",
    letterSpacing: "tighter",
    pl: "4"
  },
  divider: {
    my: "4",
    borderColor: "white",
    borderBottom: "2px dotted"
  }
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
