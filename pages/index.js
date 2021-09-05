import { useEffect, useState } from "react"
import { IconButton, Flex, Heading, Input, Text } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import axios from "axios"

import Layout, { Container } from "../src/components/Layout"

const Home = () => {
  const [results, setResults] = useState ([])
  const [searchQuery, setSearchQuery] = useState (null)
  const [inputQuery, setInputQuery] = useState ("")

  useEffect (
    () => {
      const getResults = async () => {
        const searchResults = await axios.get (
          `${process.env.NEXT_PUBLIC_BASE_URL}/${searchQuery}`
        )
        setResults (searchResults.data)
      }

      getResults()
    },
    [searchQuery]
  )

  return (
    <Layout>
      <Container>
        <Heading>What are you looking for today?</Heading>
        <Flex marginTop={5}>
          <Input
            variant="flushed"
            size="xl"
            placeholder="Search..."
            value={inputQuery}
            onChange={({ target }) => setInputQuery (target.value)}
            isRequired={true}
          />
          <IconButton
            icon={<ArrowForwardIcon />}
            alignSelf="flex-end"
            size="lg"
            marginLeft={5}
            onClick={() => setSearchQuery (inputQuery)}
          >
            Search
          </IconButton>
        </Flex>
        {results.length
          ? <Flex direction="column">
            {results.map (result => (
              <Text key={result.name}>
                {result.store} {result.name} {result.price} {result.link}
              </Text>
            ))}
          </Flex>
          : null}

      </Container>
    </Layout>
  )
}

export default Home
