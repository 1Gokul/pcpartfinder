import Layout, { Container } from "../src/components/Layout";
import { Heading } from "../src/components/StyledComponents";

const Products = () => {
  return (
    <Layout title="Products" page="/products">
      <Container>
        <Heading size="x2l" weight="extrabold">
          Products (WIP)
        </Heading>
      </Container>
    </Layout>
  );
};

export default Products;
