
import Layout, { Container } from "../src/components/Layout"
import { Flex, Heading, Input } from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout>
      <Container>
        <Heading>Get information on available PC components and peripherals in India</Heading>
        <Flex marginTop={10}>
          <Input size="lg" placeholder="Search for a component..."/>
        </Flex>
      </Container>
    </Layout>
  )
}
