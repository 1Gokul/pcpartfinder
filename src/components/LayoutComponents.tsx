import { css, SerializedStyles } from "@emotion/react";
import Link from "next/link";
import { Flex } from "./StyledComponents";

// Navlink
interface NavLinkProps {
  // Styles for the link
  styles: SerializedStyles;

  url: string;
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
  const { children, url, styles } = props;

  return (
    <Link href={url} passHref>
      <Flex
        alignItems="center"
        css={css`
          ${styles}
          text-transform: capitalize;
        `}
      >
        {children}
      </Flex>
    </Link>
  );
};
