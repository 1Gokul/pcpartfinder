import { Heading } from "@chakra-ui/react";

import { Container } from "../components/Layout/Container";
import { Layout } from "../components/Layout/Layout";

const Products = () => {
  return (
    <Layout title="Products" page="/products">
      <Container>
        <Heading size="2xl">Products (WIP)</Heading>
      </Container>
    </Layout>
  );
};

export default Products;
