import { Heading } from "@chakra-ui/layout";

import Layout from "../components/Layout/Layout";
import Container from "../components/Layout/Container";

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
