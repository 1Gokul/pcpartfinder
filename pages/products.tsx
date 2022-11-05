import { Heading } from "@chakra-ui/layout";

import Layout from "../src/components/Layout/Layout";
import Container from "../src/components/Layout/Container";

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
