import { Flex, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { Container } from "../components/Layout/Container";
import { Layout } from "../components/Layout/Layout";
import { ProductSearchForm } from "../sections/ProductSearchForm";

const SearchResults = dynamic(
  () =>
    import("../sections/SearchResults").then(
      (component) => component.SearchResults
    ),
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
          <Heading size="2xl" fontWeight="800">
            Find computer components available in major Indian
            stores.
          </Heading>
          <ProductSearchForm />
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
