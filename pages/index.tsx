// import { useEffect, useState } from "react";
// import axios from "axios";

import Layout, { Container } from "../src/components/Layout";
// import ProductSearchForm from "../src/components/ProductSearchForm";
// import { resultType, SearchResults } from "../src/components/SearchResults";

const Home = () => {
  // const [results, setResults] = useState<resultType>(null);
  // const [searchString, setSearchString] = useState<string>();
  // const [resultLoading, setResultLoading] = useState<boolean>(false);

  // /* Gets run when the search query is changed.
  //   Sends a request to the API and gets the results. */
  // useEffect(() => {
  //   const getResults = async () => {
  //     if (searchString) {
  //       const searchResults = await axios.get(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/${searchString}`
  //       );
  //       setResults(searchResults.data);
  //       setResultLoading(false);
  //     }
  //   };
  //   getResults();
  // }, [searchString]);

  // const submitQuery = (inputValue: string) => {
  //   setResultLoading(true);
  //   setResults(null);
  //   setSearchString(inputValue);
  // };

  // return (
  //   <Layout title="Search" page="/">
  //     <Container>
  //       <Flex direction="column" width="100%">
  //         <Heading size="2xl" fontWeight="extrabold" marginBottom={5}>
  //           Find graphics cards available in major Indian stores.
  //         </Heading>
  //         <Text color="gray.500">
  //           We're working on providing more PC components soon!
  //         </Text>
  //         <ProductSearchForm
  //           submitQuery={submitQuery}
  //           isDisabled={resultLoading}
  //         />
  //       </Flex>
  //       {resultLoading ? (
  //         <Flex marginTop={14} direction="column" justifyContent="center">
  //           <Text fontSize="2xl" align="center">
  //             Hold on... This will take a while.
  //           </Text>
  //           <Progress
  //             colorScheme="cyan"
  //             marginTop={4}
  //             size="xs"
  //             isIndeterminate={true}
  //           />
  //         </Flex>
  //       ) : (
  //         <SearchResults results={results} />
  //       )}
  //     </Container>
  //   </Layout>
  // );

  return (
    <Layout title="Search" page="/">
      <Container>pcpartfinder</Container>
    </Layout>
  );
};

export default Home;
