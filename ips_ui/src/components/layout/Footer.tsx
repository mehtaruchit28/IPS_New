import {
  Box,
  Container,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

const Footer = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      as="footer"
      bg={bg}
      borderTopWidth="1px"
      borderColor={borderColor}
      py={4}
      position="fixed"
      bottom={0}
      width="full"
    >
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="space-between"
          align="center"
        >
          <Text fontSize="sm">
            © {new Date().getFullYear()} IPS UI. All rights reserved.
          </Text>
          <Stack direction="row" spacing={6}>
            <Text fontSize="sm" color="gray.500">
              Version 1.0.0
            </Text>
            <Text fontSize="sm" color="gray.500">
              Support
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer