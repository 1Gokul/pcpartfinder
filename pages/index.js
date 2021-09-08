import { useEffect, useState } from "react"
import {
  Button,
  Flex,
  Heading,
  Icon,
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
import axios from "axios"
import { IoCart } from "react-icons/io5"
import { GoPrimitiveDot, GoChevronUp, GoChevronDown } from "react-icons/go"

import Layout, { Container } from "../src/components/Layout"
import Form from "../src/components/Form"

const Home = () => {
  const [results, setResults] = useState ({})
  const [searchQuery, setSearchQuery] = useState (null)
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

  const handleSubmit = inputValue => {
    setFormDisabled (true)
    setSearchQuery (inputValue)
  }

  return (
    <Layout title="Search" page="/">
      <Container>
        <Heading size="2xl" marginBottom={5}>
          Looking for components or peripherals?
        </Heading>
        <Form getFormValue={handleSubmit} isDisabled={formDisabled} />

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

        {results.n_results !== -1
          ? <Flex direction="column" marginTop={14}>
            <ResultViewer search_results={results} />
          </Flex>
          : null}

      </Container>
    </Layout>
  )
}

const ResultViewer = ({ search_results }) => {
  const [sort, setSort] = useState (0)
  const filterButtonStyles = useStyleConfig ("FilterButton")

  const sortSymbols = [GoPrimitiveDot, GoChevronUp, GoChevronDown]

  if (!search_results.n_results) {
    return (
      <Text fontSize="xl">
        Sorry, no results were returned from the server. Try another search string.
      </Text>
    )
  }

  return (
    <Flex direction="column" marginY={12}>
      <Button
        alignSelf="flex-end"
        sx={filterButtonStyles}
        onClick={() => setSort ((sort + 1) % 3)}
      >
        Sort <Icon as={sortSymbols[sort]} />
      </Button>

      <Flex direction="column">
        {sort === 0
          ? search_results.content.map (item => (
            <StoreTable key={item.store} item={item} />
          ))
          : <ResultTable
            items={search_results.content
              .map (item => item.results)
              .flat ()
              .sort ((a, b) => (sort === 1 ? 1 : -1) * (a.price - b.price))}
          />}
      </Flex>
    </Flex>
  )
}

const StoreTable = ({ item }) => (
  <Flex direction="column" marginBottom={16}>
    <Heading size="2xl" marginBottom={4}>{item.store}</Heading>

    {item.results.length
      ? <ResultTable items={item.results} />
      : <Text size="xl">
          No matching products found.
      </Text>}
  </Flex>
)

const ResultTable = ({ items }) => (
  <Flex overflowX="auto">
    <Table
      size="lg"
      variant="striped"
      colorScheme="cyan"
      border="2px"
      borderColor="cyan.600"
    >
      <TableCaption display={{ md: "none" }} textAlign="left" placement="top">
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
        {items.map (result => (
          <Tr key={result.name}>
            <Td>
              <Text noOfLines={2}>
                {result.name}
              </Text>
            </Td>
            <Td>
              <strong>₹{result.price}</strong>
            </Td>
            <Td>
              <Link variant="storeLink" target="_blank" href={result.link}>
                <Icon as={IoCart} fontSize="2xl" />
              </Link>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Flex>
)

export default Home
