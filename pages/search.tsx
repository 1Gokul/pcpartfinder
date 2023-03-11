import { Flex, Heading, Text } from "@chakra-ui/react";

import ProductSearchForm from "../src/components/ProductSearchForm/ProductSearchForm";
import Container from "../src/components/Layout/Container";
import Layout from "../src/components/Layout/Layout";
import { useNextQueryParam } from "../src/utils/hooks/common/useNextQueryParam";
import dynamic from "next/dynamic";
import { Router, useRouter } from "next/router";

const SearchResults = dynamic(
  () => import("../src/components/SearchResults/SearchResults"),
  {
    ssr: false
  }
);

const Home = () => {
  const router = useRouter();

  return (
    <Layout title="Search" page="/">
      <Container>
        <Flex direction="column" width="100%">
          <Heading size="2xl" fontWeight="extrabold" marginBottom={5}>
            Find graphics cards available in major Indian stores.
          </Heading>
          <Text color="gray.500">
            We're working on providing more PC components soon!
          </Text>
          <ProductSearchForm/>
        </Flex>

        <SearchResults key={router.asPath} />
      </Container>
    </Layout>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps<ResultPropType> = async ({
//   query
// }) => {
//   if (query.query) {
//     const searchQuery = query.query as string;

//     const page = Number(query.page);

//     if (page < 1 || !page) {
//       return {
//         notFound: true
//       };
//     }
//     const queryClient = new QueryClient();
//     await queryClient.fetchQuery<SearchResultObject>(
//       ["productSearch", searchQuery],
//       () => getSearchResults(searchQuery, page)
//     );

//     return {
//       props: { dehydratedState: dehydrate(queryClient), searchQuery, page }
//     };
//   } else {
//     return {
//       props: {
//         dehydratedState: null,
//         searchQuery: null,
//         page: null
//       }
//     };
//   }
// };
