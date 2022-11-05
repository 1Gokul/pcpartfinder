import { Flex } from "@chakra-ui/react";

interface ContainerProps {
  // Other style props
  [OtherProps: string]: unknown;
}
export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Flex
      direction="column"
      marginX="auto"
      marginTop={5}
      minH="80vh"
      minW="75vw"
      maxW={{ base: "95vw", md: "75vw" }}
      padding={{ base: 5, md: 10 }}
      {...props}
    >
      {props.children}
    </Flex>
  );
};

export default Container;
