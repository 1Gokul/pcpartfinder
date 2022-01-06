import { css, SerializedStyles } from "@emotion/react";
import Link from "next/link";
import { Flex } from "./StyledComponents";

// Navlink
type NavLinkProps = {
  // Styles for the link
  styles: SerializedStyles;
  children: React.ReactNode;
  url: string;
};

export const NavLink = ({ children, url, styles }: NavLinkProps) => {
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
