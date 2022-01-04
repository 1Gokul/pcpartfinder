import styled from "@emotion/styled";

// Basic reusable div with basic attributes.
interface boxOptions {
  display?: string;
  bgColor?: string;
  color?: string;
  margin?: string;
  padding?: string;
}

export const Box = styled("div")<boxOptions>`
  display: ${(props) => (props.display ? props.display : "inline")};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "var(--color-bg-primary)"};
  color: ${(props) =>
    props.color ? props.color : "var(--color-text-primary)"};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: ${(props) => (props.padding ? props.padding : 0)};

  transition: background-color 0.2s linear;
`;

// Basic reusable Flexbox component.
interface flexOptions extends boxOptions {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const Flex = styled(Box)<flexOptions>`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "normal")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "normal"};
  ${Box}
`;

export const Button = styled("button")`
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  border: 0;
  background: none;
  box-shadow: none;
`;

export const Icon = styled(Flex)`
  background-color: transparent;
  color: inherit;
`;
