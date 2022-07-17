import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import StoreLoader from '../store-loader'

const LazyStore = dynamic(() => import('../store'), {
  ssr: false,
  loading: () => <StoreLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Cheqgu's homepage" />
        <meta name="author" content="Cheqgu" />
        <meta name="author" content="Cheqgu" />
        <meta property="og:site_name" content="Cheqgu Branded" />
        <meta name="og:title" content="Cheqgu Branded" />
        <meta property="og:type" content="website" />
        <title>Cheqgu Branded - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyStore />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
