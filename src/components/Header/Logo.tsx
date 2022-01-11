import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";

import { mq } from "../../../styles/styleConfig";
import { Flex } from "../StyledComponents";

const placeholderURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkWLO2HgAD5wHaLz4gtgAAAABJRU5ErkJggg==";

export const Logo = () => {
  return (
    <Flex
      padding="0 2.5rem"
      css={css`
        z-index: 2;
      `}
    >
      <Link href="/" passHref>
        <a>
          <Flex
            css={css`
              width: 12.5rem;

              ${mq["md"]} {
                width: 18.75rem;
              }
            `}
          >
            <Image
              src="/logo.svg"
              width="300px"
              height="45px"
              alt="pcpartfinder logo"
              placeholder="blur"
              blurDataURL={placeholderURL}
              priority={true}
            />
          </Flex>
        </a>
      </Link>
    </Flex>
  );
};
