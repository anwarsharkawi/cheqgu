import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>

     <Box display={{ md: 'flex' }}>
       <Box flexGrow={1}> 
         <Heading as="h2" variant="page-title">
            Cheqgu Store
         </Heading>
         <p>Various selection of bags just for you</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/cheqgulogo.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <Paragraph>
          Click on the following &quot;links&quot; and get the best price from us &#x1F609;
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="https://wa.me/6737447215" passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Reach us now through Whatsapp message
            </Button>
          </NextLink>
        </Box>
        <Box align="center" my={4}>
          <NextLink href="https://www.instagram.com/cheqgubranded" passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Explore our range of collections through Instagram
            </Button>
          </NextLink>
        </Box>
        <Box align="center" my={4}>
          <NextLink href="https://www.facebook.com/Cheqgu-Branded-Store-111391418170989/" passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Visit our online store on Facebook
            </Button>
          </NextLink>
        </Box>
      </Section>
     </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
