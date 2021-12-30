import { Heading } from "@chakra-ui/layout";

import Layout, { Container } from "../src/components/Layout";

const Products: React.FC = () => {
  return (
    <Layout title="Products" page="/products">
      <Container>
        <Heading size="2xl">Products (WIP)</Heading>
      </Container>
    </Layout>
  );
};

export default Products;
