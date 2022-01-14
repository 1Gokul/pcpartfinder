import styled from "@emotion/styled";

import { fontSizes, headingSizes, mq } from "../../styles/styleConfig";

// Basic reusable div with basic attributes.
interface boxOptions {
  display?: string;
  bgColor?: string;
  color?: string;
  margin?: string;
  padding?: string;
}

export const Box = styled("div")<boxOptions>`
  display: ${(props) => props.display || "inline"};
  background-color: ${(props) => props.bgColor || "var(--color-bg-primary)"};
  color: ${(props) => props.color || "var(--color-text-primary)"};
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};

  transition: background-color 0.2s linear;
`;

// Basic reusable Flexbox component.
interface flexOptions extends boxOptions {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const Flex = styled(Box)<flexOptions>`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "normal"};
  justify-content: ${(props) => props.justifyContent || "normal"};
  ${Box}
`;

export const Button = styled("button")`
  // removing default styles
  background: none;
  box-shadow: none;
  border: 0;

  display: inline-flex;
  align-items: center;
  cursor: pointer;
  align-self: center;
  font-weight: bold;
  font-family: inherit;
  transition: all 0.2s linear;
  position: relative;
  background-color: var(--color-theme-primary);
  color: var(--color-text-secondary);
  &:hover {
    filter: brightness(85%);
  }
`;

export const Icon = styled(Flex)`
  background-color: transparent;
  color: ${(props) => props.color || "inherit"};
`;

interface textOptions {
  size?: string;
  weight?: string;
  align?: string;
}

//https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/heading.ts
// see this and make changes

/**  Heading   */

export const Heading = styled("h1")<textOptions>`
  margin: 0;
  font-size: ${(props) =>
    props.size ? fontSizes[headingSizes[props.size].mobile] : "lg"};
  line-height: 1;
  font-weight: ${(props) => props.weight || "normal"};

  ${mq["md"]} {
    font-size: ${(props) =>
      props.size ? fontSizes[headingSizes[props.size].desktop] : "lg"};
  }
`;

export const TextBox = styled(Box)<textOptions>`
  font-size: ${(props) => (props.size ? fontSizes[props.size] : "sm")};
  font-weight: ${(props) => props.weight || "normal"};
  text-align: ${(props) => props.align || "start"};
`;

export const Input = styled("input")`
  background-color: var(--color-bg-primary);
  color: var(--color-text-secondary);
  height: auto;
  padding: 1rem;
  font-family: inherit;
  font-weight: 500;
  border: 0.15rem solid;
  border-color: #a0aec0;
  &:focus {
    outline: none;
    border-color: #009fb8;
  }
`;

export const StyledTable = styled("table")`
  border: 2px solid #00cec3;
  width: 100%;
  border-collapse: collapse;
`;
export const Thead = styled("thead")`
  text-align: left;
`;
export const Tbody = styled("tbody")`
  tr:nth-of-type(odd) {
    background-color: var(--color-theme-primary);
  }
`;
export const Tr = styled("tr")`
  display: table-row;
`;
export const Th = styled("th")`
  text-transform: uppercase;
  color: var(--color-text-gray);
  padding: 0.5rem 1rem;
  font-size: ${fontSizes["sm"]};
  ${mq["md"]} {
    padding: 1rem 2.5rem;
  }
`;
export const Td = styled("td")`
  padding: 0.5rem 1rem;
  font-size: ${fontSizes["sm"]};
  align-self: center;
  align-items: center;
  ${mq["md"]} {
    font-size: ${fontSizes["md"]};
    padding: 1.5rem 2.5rem;
  }
`;
