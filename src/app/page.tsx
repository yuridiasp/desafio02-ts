import {
  ChakraProvider,
 } from '@chakra-ui/react'

import { Card } from './components/Card'
import { Header } from './components/Header'

export default function Home() {

  return (
    <ChakraProvider>
      <Header />
      <Card />
    </ChakraProvider>
  )
}
