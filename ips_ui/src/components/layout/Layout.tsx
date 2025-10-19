import { Box, useDisclosure } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg="gray.50">
      <Header onShowSidebar={onOpen} />
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Box
        as="main"
        pt="14" // Header height
        pb="16" // Footer height
        px={4}
        bg="gray.50"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout