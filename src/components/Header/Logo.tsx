import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { mq } from "../../../styles/styleConfig";
import { Flex } from "../StyledComponents";

const placeholderURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkWLO2HgAD5wHaLz4gtgAAAABJRU5ErkJggg==";

export const Logo: React.FC = () => {
  return (
    <Flex padding="0 40px">
      <Link href="/" passHref>
        <a>
          <Flex
            css={css`
              width: 200px;

              ${mq["md"]} {
                width: 300px;
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
