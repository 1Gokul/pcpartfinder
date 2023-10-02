import { Link } from "@chakra-ui/next-js";
import { SystemStyleObject, Flex } from "@chakra-ui/react";

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
  children: React.ReactNode;
}) => {
  return (
    <Link href={url}>
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
