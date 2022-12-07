import { Flex, Heading, Text } from "@chakra-ui/react";

import ProductSearchForm from "../src/components/ProductSearchForm";
import { SearchResults } from "../src/components/SearchResults";
import Container from "../src/components/Layout/Container";
import Layout from "../src/components/Layout/Layout";
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery
} from "@tanstack/react-query";
import { SearchResultObject } from "../src/shared/types/SearchResult";
import { GetServerSideProps } from "next";
import { getSearchResults } from "../src/utils/hooks/queries/SearchQueries";

type ResultPropType = {
  dehydratedState: DehydratedState;
  searchQuery: string;
};

const Home = ({ searchQuery }) => {
  const { data, isSuccess } = useQuery<SearchResultObject>(
    ["productSearch", searchQuery],
    () => getSearchResults(searchQuery),
    { enabled: !!searchQuery }
  );

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
          <ProductSearchForm isDisabled={false} />
        </Flex>

        {isSuccess && <SearchResults results={data} />}
      </Container>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<ResultPropType> = async ({
  query
}) => {
  const searchQuery = query.query as string;

  if (query.query) {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery<SearchResultObject>(
      ["productSearch", searchQuery],
      () => getSearchResults(searchQuery)
    );

    return {
      props: { dehydratedState: dehydrate(queryClient), searchQuery }
    };
  } else {
    return {
      props: { dehydratedState: null, searchQuery: searchQuery ?? null }
    };
  }
};
