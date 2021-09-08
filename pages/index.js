import { useEffect, useState } from "react"
import {
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Link,
  Text,
  Table,
  Thead,
  Tbody,
  TableCaption,
  Tr,
  Th,
  Td,
  Progress,
  useStyleConfig,
} from "@chakra-ui/react"
import { VscArrowRight } from "react-icons/vsc"
import { IoCart } from "react-icons/io5"
import axios from "axios"

import Layout, { Container } from "../src/components/Layout"


const Home = () => {
  const [results, setResults] = useState ({})
  const [searchQuery, setSearchQuery] = useState (null)
  const [inputQuery, setInputQuery] = useState ("")
  const [formDisabled, setFormDisabled] = useState (false)

  useEffect (
    () => {
      const getResults = async () => {
        const searchResults = await axios.get (
          `${process.env.NEXT_PUBLIC_BASE_URL}/${searchQuery}`
        )

        setResults (searchResults.data)
        setFormDisabled (false)
      }

      getResults ()
    },
    [searchQuery]
  )

  const submitQuery = event => {
    event.preventDefault ()
    setFormDisabled (true)
    setSearchQuery (inputQuery)
  }

  return (
    <Layout title="Search" page="/">
      <Container>
        <Heading size="2xl" marginBottom={5}>
          Looking for components or peripherals?
        </Heading>
        <form onSubmit={submitQuery}>

          <Flex marginY={5} direction={{ base: "column", md: "row" }}>
            <Input
              size="xl"
              variant="filled"
              placeholder="Search..."
              border="2px"
              borderColor="gray.400"
              value={inputQuery}
              onChange={({ target }) => setInputQuery (target.value)}
              focusBorderColor="cyan.600"
              isDisabled={formDisabled}
              isRequired={true}
            />
            <Button
              type="submit"
              sx={useStyleConfig ("SearchButton")}
              isDisabled={formDisabled}
            >
              Search
              <Icon as={VscArrowRight} marginTop={0.5} marginLeft={2} />
            </Button>
          </Flex>
        </form>

        {formDisabled
          ? <Flex marginTop={14} direction="column" justifyContent="center">
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
          : null}

        {results.n_results !== -1 ?
          <Flex direction="column" marginTop={14}>
            <ResultTable result={results} />
          </Flex>
          :
          null
        }

      </Container>
    </Layout>
  )
}

const ResultTable = ({ result }) => {

  const filterBoxStyles = useStyleConfig("FilterBox")

  if (!result.n_results) {
    return (
      <Text fontSize="xl">
        Sorry, no results were returned from the server. Try another search string.
      </Text>
    )
  }

  return(
    <Flex direction="column">
      <Flex sx={filterBoxStyles} bgColor="cyan.800" justifyContent="space-between" paddingX={3}>
        <Text fontSize="md">FILTER</Text>
      </Flex>
      {
        result.content.map (content => {
          return (
            <Flex
              key={content.store}
              direction="column"
              marginY={16}
              overflowX="auto"
            >
              <Heading size="2xl" marginBottom={6}>{content.store}</Heading>

              {content.results.length
                ? <Table
                  size="lg"
                  variant="striped"
                  colorScheme="cyan"
                  border="2px"
                  borderColor="cyan.600"
                >
                  <TableCaption
                    display={{ md: "none" }}
                    textAlign="left"
                    placement="top"
                  >
                      ← Swipe left to see other columns
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Product</Th>
                      <Th>Price</Th>
                      <Th>Link</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {content.results.map (result => (
                      <Tr key={result.name}>
                        <Td>
                          <Text noOfLines={3}>
                            {result.name}
                          </Text>
                        </Td>
                        <Td>
                          <strong>{result.price}</strong>
                        </Td>
                        <Td>
                          <Link
                            variant="storeLink"
                            target="_blank"
                            href={result.link}
                          >
                            <Icon as={IoCart} fontSize="2xl" />
                          </Link>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                : <Text size="xl">
                    No matching products found.
                </Text>}

            </Flex>
          )
        })
      }
    </Flex>
  )


}


export default Home
