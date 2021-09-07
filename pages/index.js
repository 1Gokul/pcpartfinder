import { useEffect, useState } from "react"
import { Button, Flex, Heading, Icon, Input, Text } from "@chakra-ui/react"
import { VscArrowRight } from "react-icons/vsc"
import axios from "axios"

import Layout, { Container } from "../src/components/Layout"

const Home = () => {
  const [results, setResults] = useState ([])
  const [searchQuery, setSearchQuery] = useState (null)
  const [inputQuery, setInputQuery] = useState ("")
  const [formDisabled, setFormDisabled] = useState(false)

  useEffect (
    () => {
      const getResults = async () => {
        const searchResults = await axios.get (
          `${process.env.NEXT_PUBLIC_BASE_URL}/${searchQuery}`
        )

        setResults (searchResults.data)
        setFormDisabled(false)
      }

      getResults()
    },
    [searchQuery]
  )

  const submitQuery = (event) => {
    event.preventDefault()
    setFormDisabled(true)
    setSearchQuery(inputQuery)
  }

  return (
    <Layout title="Search" page="/">
      <Container>
        <Heading size="2xl" marginBottom={5}>What are you looking for today?</Heading>
        <form onSubmit={submitQuery}>

          <Flex marginTop={5} direction={{ base: "column", md: "row" }}>

            <Input
              size="xl"
              variant="filled"
              placeholder="Search..."
              border="2px"
              borderColor="gray.400"
              value={inputQuery}
              onChange={({ target }) => setInputQuery (target.value)}
              isDisabled={formDisabled}
              isRequired={true}
            />
            <Button
              type="submit"
              variant="search"
              alignSelf="flex-end"
              marginLeft={5}
              isDisabled={formDisabled}
              marginTop={{ base: 5, md: 0 }}
            >
            Search
              <Icon as={VscArrowRight} marginTop={0.5} marginLeft={2} />
            </Button>
          </Flex>
        </form>

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
