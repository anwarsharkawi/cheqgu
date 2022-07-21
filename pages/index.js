import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbInstagram from '../public/images/instagram.png'
import thumbFacebook from '../public/images/facebook.png'
import Image from 'next/image'
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'

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
        <List>
          <ListItem>
            <Link href="http://wa.me/6737447215" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWhatsapp />}
              >
                Whatsapp
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/cheqgubranded" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @cheqgubranded
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/Cheqgu-Branded-Store-111391418170989/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                Facebook Store
              </Button>
            </Link>
          </ListItem>

        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.instagram.com/cheqgubranded"
            title="Cheqgu Instagram"
            thumbnail={thumbInstagram}
          >
            Official Instagram page 
          </GridItem>
          <GridItem
            href="https://www.facebook.com/Cheqgu-Branded-Store-111391418170989/"
            title="Facebook"
            thumbnail={thumbFacebook}
          >
            Official Facebook page
          </GridItem>
        </SimpleGrid>
      </Section>
     </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
