import { Flex } from "@chakra-ui/react";

export const Container = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode;
  // Other style props
  [OtherProps: string]: unknown;
}) => {
  return (
    <Flex
      direction="column"
      marginX="auto"
      marginTop={5}
      minH="80vh"
      minW="75vw"
      maxW={{ base: "95vw", md: "75vw" }}
      padding={{ base: 5, md: 10 }}
      {...otherProps}
    >
      {children}
    </Flex>
  );
};
