const baseStyle = {
  button: {
    p: "3",
    fontWeight: "medium",
    bg: "green.600",
    color: "gray.900",
    _hover: {
      bg: "green.600",
      color: "white"
    }
  },
  list: {
    p: "0",
    borderRadius: "none",
    border: "2px solid #126932"
  },
  item: {
    p: "3",
    fontWeight: 500,
    color: "gray.800",
    bg: "green.50",
    _hover: {
      outline: "none",
      bg: "green.400"
    },
    _focus: {
      bg: "green.600"
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
};

export const menuTheme = { baseStyle };
