
import Layout from "../src/components/Layout"
import { Flex, Heading } from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout>
      <Flex direction="column" justifyContent="center">

        <Heading alignSelf="center" fontSize="100px">PCPartFinder</Heading>
      </Flex>
    </Layout>
  )
}
