import { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  Progress,
  useStyleConfig
} from "@chakra-ui/react";
import axios from "axios";
import { GoPrimitiveDot, GoChevronUp, GoChevronDown } from "react-icons/go";
import { Element } from "react-scroll";

import Layout, { Container } from "../src/components/Layout";
import ProductSearchForm from "../src/components/ProductSearchForm";
import { ResultTable, StoreResultTable } from "../src/components/Tables";

// Structure of the JSON returned from the server after a search request.
interface resultType {
  n_results: number;
  content: [
    {
      store_name: string;
      store_results: [
        { name: string; url: string; price: number; store: string }
      ];
    }
  ];
}

const Home: React.FC = () => {
  const [results, setResults] = useState<resultType>(null);
  const [searchString, setSearchString] = useState<string>();
  const [resultLoading, setResultLoading] = useState<boolean>(false);

  /* Gets run when the search query is changed.
    Sends a request to the API and gets the results. */
  useEffect(() => {
    const getResults = async () => {
      if (searchString) {
        const searchResults = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/${searchString}`
        );
        setResults(searchResults.data);
        setResultLoading(false);
      }
    };
    getResults();
  }, [searchString]);

  const submitQuery = (inputValue: string) => {
    setResultLoading(true);
    setResults(null);
    setSearchString(inputValue);
  };

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
          <ProductSearchForm
            submitQuery={submitQuery}
            isDisabled={resultLoading}
          />
        </Flex>
        <ResultContainer
          resultLoading={resultLoading}
          searchResults={results}
        />
      </Container>
    </Layout>
  );
};

const ResultContainer = ({ resultLoading, searchResults }) => {
  /* The value of "sort" determines the format in which the results are shown
    Results by store (sort=0), ascending order(sort=1), descending order(sort=2)*/
  const [sort, setSort] = useState(0);
  const filterButtonStyles = useStyleConfig("CustomButton");

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
          Sorry, no results were found. Try another search string.
        </Text>
      );
    } else {
      return (
        <Element name="result">
          <Flex direction="column" marginTop={14}>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              marginBottom={5}
            >
              <Text color="gray.500" fontWeight="bold">
                {searchResults.n_results} RESULTS
              </Text>
              {/*  Button to cycle through values of "sort" */}
              <Button
                alignSelf="flex-end"
                sx={filterButtonStyles}
                fontSize="xl"
                padding={6}
                marginBottom={5}
                onClick={() => setSort((sort + 1) % 3)}
              >
                Sort <Icon as={sortSymbols[sort]} />
              </Button>
            </Flex>
            <Flex direction="column">
              {sort === 0 ? (
                searchResults.content.map((store) => (
                  <StoreResultTable
                    key={store.store_name}
                    storeName={store.store_name}
                    storeResults={store.store_results}
                  />
                ))
              ) : (
                <ResultTable
                  items={searchResults.content
                    .map((item) => item.store_results)
                    .flat()
                    .sort(
                      (a, b) => (sort === 1 ? 1 : -1) * (a.price - b.price)
                    )}
                />
              )}
            </Flex>
          </Flex>
        </Element>
      );
    }
  } else return null;
};

export default Home;
