
import Layout from "../src/components/Layout"
import { Flex, Heading } from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout>
      <Flex direction="column" flexGrow={1} alignItems="center" justifyContent="center">
        <Heading fontSize="100px">PCPartFinder</Heading>
      </Flex>
    </Layout>
  )
}
