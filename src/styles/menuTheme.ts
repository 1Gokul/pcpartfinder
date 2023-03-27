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
    bg: "aqua.600",
    color: "gray.900",
    _hover: {
      bg: "aqua.600",
      color: "white"
    }
  },
  list: {
    // this will style the MenuList component
    p: '0',
    borderRadius: "none",
    border: "2px solid #70FFFF",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    p: "3",
    fontWeight: 500,
    color: "gray.800",
    bg: "aqua.50",
    _hover: {
      bg: "aqua.500"
    },
    _focus: {
      bg: "aqua.600"
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
