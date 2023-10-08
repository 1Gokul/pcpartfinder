import Head from "next/head";

const description =
  "Search for PC components and peripherals from major Indian stores!";

export const SEO = ({ page, title }: { page: string; title: string }) => {
  const pageTitle = title + "- PCPartFinder";
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="@1GokulV" key="twhandle" />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_API_SITE_URL}/og_image.jpg`}
        key="ogimage"
      />
      <meta property="og:site_name" content="PCPartFinder" key="ogsitename" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_API_SITE_URL}${page}`}
        key="ogurl"
      />
      <meta
        property="og:title"
        content={title.split("-").join(" ")}
        key="ogtitle"
      />

      <title>{pageTitle}</title>
    </Head>
  );
};
