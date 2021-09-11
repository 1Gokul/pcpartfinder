import { useEffect, useState } from "react"
import {
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  Progress,
  useStyleConfig,
} from "@chakra-ui/react"
import axios from "axios"
import { GoPrimitiveDot, GoChevronUp, GoChevronDown } from "react-icons/go"
import { scroller, Element } from "react-scroll"

import Layout, { Container } from "../src/components/Layout"
import Form from "../src/components/Form"
import { ResultTable, StoreTable } from "../src/components/Tables"

const Home = () => {
  const [results, setResults] = useState ({ n_results: -1 })
  const [searchQuery, setSearchQuery] = useState (null)
  const [formDisabled, setFormDisabled] = useState (false)
  const [resultVisible, setResultsVisible] = useState (false)

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
    setResultsVisible (false)
    setSearchQuery (inputValue)
  }

  return (
    <Layout title="Search" page="/">
      <Container>
        <Heading size="2xl" marginBottom={5}>
          Looking for components or peripherals?
        </Heading>
        <Form getFormValue={handleSubmit} isDisabled={formDisabled} />

        {formDisabled && !resultVisible
          ?
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
          : null}

        <Element name="result">
          {results.n_results !== -1 && !formDisabled
            ? <Flex direction="column" marginTop={14} id="results">
              <ResultViewer
                resultVisible={resultVisible}
                setResultsVisible={setResultsVisible}
                search_results={results}
              />
            </Flex>
            : null
          }
        </Element>
      </Container>
    </Layout>
  )
}

const ResultViewer = props => {
  const [sort, setSort] = useState (0)
  const filterButtonStyles = useStyleConfig ("FilterButton")

  const sortSymbols = [GoPrimitiveDot, GoChevronUp, GoChevronDown]


  useEffect(() => {
    if (!props.resultVisible) {
      scroller.scrollTo ("result", {
        duration: 1000,
        smooth: true,
        offset: 100,
      })
      props.setResultsVisible (true)
    }
  }, [props])

  if (!props.search_results.n_results) {
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
          ? props.search_results.content.map (table => (
            <StoreTable key={table.store} item={table} />
          ))
          : <ResultTable
            items={props.search_results.content
              .map (item => item.results)
              .flat ()
              .sort ((a, b) => (sort === 1 ? 1 : -1) * (a.price - b.price))}
          />}
      </Flex>
    </Flex>
  )
}

export default Home
