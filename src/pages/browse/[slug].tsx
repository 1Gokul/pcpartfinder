import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Container } from "../../components/Layout/Container";
import { Layout } from "../../components/Layout/Layout";
import { BrowseMenuItems } from "../../constants/browseMenuItems";

const Products = () => {
  const router = useRouter();

  const [validCategory, setValidCategory] = useState(false);

  useEffect(() => {
    if (
      !(
        router.query.slug &&
        !Array.isArray(router.query.slug) &&
        Object.keys(BrowseMenuItems).includes(router.query.slug)
      )
    ) {
      void router.push("/search");
    } else {
      setValidCategory(true);
    }
  }, [router]);

  return (
    <Layout title="Browse" page="/products">
      <Container>
        <Heading size="2xl">
          {validCategory
            ? BrowseMenuItems[router.query.slug as keyof typeof BrowseMenuItems]
            : "Loading..."}
        </Heading>
      </Container>
    </Layout>
  );
};

export default Products;
