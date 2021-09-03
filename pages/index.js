
import Layout, { Container } from "../src/components/Layout"
import { Flex, Heading } from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout>
      <Container>
        <Heading fontSize="100px">PCPartFinder</Heading>
      </Container>
    </Layout>
  )
}
