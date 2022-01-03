import styled from "@emotion/styled";

interface boxProps {
  bgColor?: string;
  color?: string;
}

export const Box = styled("div")<boxProps>`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "var(--color-bg-primary)"};
  color: ${(props) =>
    props.color ? props.color : "var(--color-text-primary)"};
`;

export const Flex = styled("div")`
  display: flex;
  ${Box}
`;
