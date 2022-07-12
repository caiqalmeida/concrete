import { Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
      <Heading>Hello Concrete</Heading>
    </Flex>
  )
}

export default Home
