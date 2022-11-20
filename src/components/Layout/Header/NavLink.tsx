import { SystemStyleObject, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const NavLink = ({
  children,
  url,
  styles,
  ...otherProps
}: {
  // Theme styles for the link
  styles: SystemStyleObject;
  // extra styles (if any)
  [otherProps: string]: unknown;
}) => {
  return (
    <Link href={url} passHref>
      <Flex
        sx={styles}
        textTransform="capitalize"
        alignItems="center"
        {...otherProps}
      >
        {children}
      </Flex>
    </Link>
  );
};
