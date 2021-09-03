
import Layout, { Container } from "../src/components/Layout"
import { Button, Flex, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

export default function Home() {
  return (
    <Layout>
      <Container>
        <Heading>Find PC components and peripherals in India.</Heading>
        <Flex marginY={16}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              height="100%"
              children={<Search2Icon color="gray.400"/>}  //eslint-disable-line
            />
            <Input size="lg" fontSize="2xl" placeholder="Search for a component..." variant="flushed"/>
          </InputGroup>
        </Flex>
        <Button alignSelf="center" fontSize="xl" paddingX={12} paddingY={8} >Search</Button>
      </Container>
    </Layout>
  )
}
