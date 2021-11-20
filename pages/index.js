import { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  Progress,
  useStyleConfig,
} from "@chakra-ui/react";
import axios from "axios";
import { GoPrimitiveDot, GoChevronUp, GoChevronDown } from "react-icons/go";
import { Element } from "react-scroll";

import Layout, { Container } from "../src/components/Layout";
import Form from "../src/components/Form";
import { ResultTable, StoreResultTable } from "../src/components/Tables";

const Home = () => {
  const [results, setResults] = useState (null);
  const [searchQuery, setSearchQuery] = useState ();
  const [resultLoading, setResultLoading] = useState (false);

  /* Gets run when the search query is changed.
    Sends a request to the API and gets the results. */
  useEffect (
    () => {
      const getResults = async () => {
        if (searchQuery) {
          const searchResults = await axios.get (
            `${process.env.NEXT_PUBLIC_BASE_URL}/${searchQuery}`
          );
          setResults (searchResults.data);
          setResultLoading (false);
        }
      };
      getResults ();
    },
    [searchQuery]
  );

  const handleSubmit = inputValue => {
    setResultLoading (true);
    setResults (null);
    setSearchQuery (inputValue);
  };

  return (
    <Layout title="Search" page="/">
      <Container>
        <Heading size="2xl" marginBottom={5}>
        Find PC parts available in major Indian stores!
        </Heading>
        <Text color="gray.500">Sorry, only data on Graphics Cards are available now. More data will be added soon!</Text>
        <Form getFormValue={handleSubmit} isDisabled={resultLoading} />

        <Flex direction="column" marginTop={14} id="results">
          <ResultContainer
            resultLoading={resultLoading}
            searchResults={results}
          />
        </Flex>

      </Container>
    </Layout>
  );
};


const ResultContainer = ({ resultLoading, searchResults }) => {
  /* The value of "sort" determines the format in which the results are shown
    Results by store (sort=0), ascending order(sort=1), descending order(sort=2)*/
  const [sort, setSort] = useState (0);
  const filterButtonStyles = useStyleConfig ("LargeButton");

  const sortSymbols = [GoPrimitiveDot, GoChevronUp, GoChevronDown];

  if (resultLoading) {
    return (
      <Flex marginTop={14} direction="column" justifyContent="center">
        <Text fontSize="2xl" align="center">
          Hold on... This will take a while.
        </Text>
        <Progress
          colorScheme="cyan"
          marginTop={4}
          size="xs"
          isIndeterminate={true}
        />
      </Flex>
    );
  } else if (searchResults) {
    if (!searchResults.n_results) {
      return (
        <Text fontSize="xl">
          Sorry, no results were returned from the server. Try another search string.
        </Text>
      );
    } else {

      return (
        <Element name="result">
          <Flex direction="column">
<Flex direction="row" justifyContent="space-between" alignItems="center" marginBottom={5}>
  <Text color="gray.500" fontWeight="bold" >
       {searchResults.n_results} RESULTS 
  </Text>
            {/*  Button to cycle through values of "sort" */}
            <Button
              alignSelf="flex-end"
              sx={filterButtonStyles}
              fontSize="xl"
              marginBottom={5}
              onClick={() => setSort ((sort + 1) % 3)}
            >
            Sort <Icon as={sortSymbols[sort]} />
            </Button>
</Flex>
            <Flex direction="column">
              {sort === 0
                ?
                searchResults.content.map (store => (
                  <StoreResultTable
                    key={store.store_name}
                    storeName={store.store_name}
                    storeResults={store.store_results}
                  />
                ))
                :
                <ResultTable
                  items={searchResults.content
                    .map(item => item.store_results)
                    .flat()
                    .sort ((a, b) => (sort === 1 ? 1 : -1) * (a.price - b.price))}
                />}
            </Flex>
          </Flex>
        </Element>
      );
    }
  } else return null;
};

export default Home;
