import { useEffect, useState } from "react";
import axios from "axios";
import { css } from "@emotion/react";

import Layout, { Container } from "../src/components/Layout";
import { Flex, Heading, TextBox } from "../src/components/StyledComponents";
import ProductSearchForm from "../src/components/ProductSearchForm";
import { resultType, SearchResults } from "../src/components/SearchResults";

const Home = () => {
  const [results, setResults] = useState<resultType | null>(null);
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
    if (searchString !== inputValue) {
      setResultLoading(true);
      setResults(null);
      setSearchString(inputValue);
    }
  };
  return (
    <Layout title="Search" page="/">
      <Container>
        <Flex
          flexDirection="column"
          css={css`
            width: 100%;
          `}
        >
          <Heading
            size="x2l"
            css={css`
              margin-bottom: 1.25rem;
              font-weight: 800;
            `}
          >
            Find graphics cards available in major Indian stores.
          </Heading>
          <TextBox color="var(--color-text-gray)">
            We're working on providing more PC components soon!
          </TextBox>
          <ProductSearchForm
            submitQuery={submitQuery}
            isDisabled={resultLoading}
          />
        </Flex>
        {resultLoading ? (
          <Flex
            flexDirection="column"
            justifyContent="center"
            css={css`
              margin-top: 3.5rem;
            `}
          >
            <TextBox size="x4l" align="center">
              Hold on... This will take a while.
            </TextBox>
            {/* <Progress
              colorScheme="cyan"
              marginTop={4}
              size="xs"
              isIndeterminate={true}
            /> */}
          </Flex>
        ) : (
          <SearchResults results={results} />
        )}
      </Container>
    </Layout>
  );
};

export default Home;
