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
import { useState } from "react";
import { useRouter } from "next/router";
import { useNextQueryParam } from "../src/utils/hooks/common/useNextQueryParam";

const Home = () => {
  const router = useRouter();
  const searchQuery = useNextQueryParam("query");

  const page = parseInt(useNextQueryParam("page") as string) || 1;

  if (page < 1) {
    router.push({
      pathname: "search",
      ...(searchQuery && { query: { query: searchQuery, page: 1 } })
    });
  }

  /* The value of "sort" determines the format in which the results are shown
    Normal results as received (sort=0), ascending order(sort=1), descending order(sort=2)*/
  const [sort, setSort] = useState<number>(0);

  const handleChangeSort = () => {
    setSort((sort + 1) % 3);
  };

  const { data, isSuccess } = useQuery<SearchResultObject>(
    ["productSearch", searchQuery, page, sort],
    () => getSearchResults(searchQuery, page, sort),
    { enabled: !!searchQuery && page >= 1 }
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
          <ProductSearchForm isDisabled={false} query={searchQuery} />
        </Flex>

        {isSuccess && (
          <SearchResults
            results={data}
            sort={sort}
            changeSort={handleChangeSort}
          />
        )}
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
