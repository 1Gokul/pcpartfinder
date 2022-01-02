import styled from "@emotion/styled";

interface boxProps {
  bgColor?: string;
  color?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
}

export const Box = styled("div")<boxProps>`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "--color-bg-primary"};
  color: ${(props) => (props.color ? props.color : "--color-text-primary")};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

interface flexProps {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const Flex = styled(Box)<flexProps>(`
display: flex;
  flex-direction: ${(props) => (props.padding ? props.padding : "row")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "normal")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "normal"};
  
`);
