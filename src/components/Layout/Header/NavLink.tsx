import { Link } from "@chakra-ui/next-js";
import { SystemStyleObject, Flex, FlexProps } from "@chakra-ui/react";

export const NavLink = ({
  children,
  url,
  styles,
  menuButtonProps
}: {
  url: string;
  // Theme styles for the link
  styles: SystemStyleObject;
  children: React.ReactNode;
  menuButtonProps?: FlexProps;
}) => {
  return (
    <Link href={url}>
      <Flex sx={styles} alignItems="center" {...menuButtonProps}>
        {children}
      </Flex>
    </Link>
  );
};
