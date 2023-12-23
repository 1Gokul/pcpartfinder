import { Link } from "@chakra-ui/next-js";
import { SystemStyleObject, Flex } from "@chakra-ui/react";

export const NavLink = ({
  children,
  url,
  styles,
}: {
  url: string;
  // Theme styles for the link
  styles: SystemStyleObject;
  children: React.ReactNode;
}) => {
  return (
    <Link href={url}>
      <Flex
        sx={styles}
        textTransform="capitalize"
        alignItems="center"
      >
        {children}
      </Flex>
    </Link>
  );
};
