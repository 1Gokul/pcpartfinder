// Thanks to LoganAtCrypto
// https://github.com/vercel/next.js/discussions/11484#discussioncomment-1168808

import { useRouter } from "next/router";
import { useMemo } from "react";

/**
 *
 * @param key the query key
 * @returns the query value to the query key
 */
export const useNextQueryParam = (key: string): string | undefined => {
  const { asPath } = useRouter();

  const value = useMemo(() => {
    const match = asPath.match(new RegExp(`[&?]${key}=(.*?)(&|$)`));
    if (!match) return undefined;
    return decodeURIComponent(match[1].replace(/\+/g, " "));
  }, [asPath, key]);

  return value;
};
