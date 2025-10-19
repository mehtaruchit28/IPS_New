import React, { useState } from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link,
  Icon,
  Text,
  Flex,
  useColorModeValue,
  IconButton,
  Accordion,
  AccordionPanel,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Button
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { FiHome, FiUsers, FiSettings, FiDatabase,FiMenu, FiArrowLeft } from 'react-icons/fi'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onCollapse?: (isCollapsed: boolean) => void
}

interface NavItemProps {
  icon: React.ElementType
  children?: React.ReactNode
  href: string
  isCollapsed?: boolean
}

const NavItem = ({ icon, children, href, isCollapsed }: NavItemProps) => {
  const router = useRouter()
  const isActive = router.pathname === href
  const activeBg = useColorModeValue('blue.50', 'blue.800')
  const activeColor = useColorModeValue('blue.600', 'blue.200')
  const inactiveColor = useColorModeValue('gray.600', 'gray.400')

  
  return (
    <Link
      as={NextLink}
      href={href}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      title={typeof children === 'string' ? children : undefined}
    >
      <Flex
        align="center"
        p="4"
        mx={isCollapsed ? "2" : "4"}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? activeBg : 'transparent'}
        color={isActive ? activeColor : inactiveColor}
        _hover={{
          bg: activeBg,
          color: activeColor,
        }}
        justifyContent={isCollapsed ? "center" : "flex-start"}
      >
        <Icon
          fontSize="18"
          as={icon}
          mr={isCollapsed ? "0" : "4"}
        />
        {!isCollapsed && children}
      </Flex>
    </Link>
  )
}

const Sidebar = ({ isOpen, onClose, onCollapse }: SidebarProps) => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const router = useRouter()
  const handleCollapse = () => {
    const newCollapsedState = !isCollapsed
    setIsCollapsed(newCollapsedState)
    onCollapse?.(newCollapsedState)
  }
 const handleNavigate = (href: string) => {
    router.push(href);
  };
  const SidebarContainer = (
    <Box 
      bg={bg}
      borderRightWidth="1px"
      borderColor={borderColor}
      w={isCollapsed ? "60px" : "240px"}
      transition="all 0.3s ease"
      h="100vh"
      position="fixed"
      top={0}
      left={0}
    >
      <Flex h="14" alignItems="center" justifyContent="space-between" px={4}>
        {!isCollapsed && <Text fontWeight="bold"></Text>}
        <IconButton
          aria-label={isCollapsed ? "Expand" : "Collapse"}
          icon={isCollapsed ? <Icon as={FiMenu} /> : <Icon as={FiArrowLeft} />}
          variant="ghost"
          onClick={handleCollapse}
          
          size="sm"
        />
      </Flex>
     <VStack spacing={2} align="stretch" pt={4} px={2}>
        <Accordion allowMultiple>
        {/* Admin Section */}
        <AccordionItem border="none">
          <h2>
            <AccordionButton _hover={{ bg: 'gray.100' }} borderRadius="md">
              <Box flex="1" textAlign="left" fontWeight="bold">
                Admin
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <VStack align="stretch" spacing={1}>
              <Button
                variant="ghost"
                justifyContent="flex-start"
                onClick={() => handleNavigate('/home')}
              >
                Dashboard
              </Button>
              <Button
                variant="ghost"
                justifyContent="flex-start"
                onClick={() => handleNavigate('/users')}
              >
                Users
              </Button>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        {/* Reports Section */}
        <AccordionItem border="none">
          <h2>
            <AccordionButton _hover={{ bg: 'gray.100' }} borderRadius="md">
              <Box flex="1" textAlign="left" fontWeight="bold">
                Reports
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <VStack align="stretch" spacing={1}>
              <Button
                variant="ghost"
                justifyContent="flex-start"
                onClick={() => handleNavigate('/reports/map')}
              >
                State/County Map
              </Button>
              <Button
                variant="ghost"
                justifyContent="flex-start"
                onClick={() => handleNavigate('/reports/other')}
              >
                Other Reports
              </Button>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      </VStack>
    </Box>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <Box display={{ base: 'none', md: 'block' }}>
        {SidebarContainer}
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        autoFocus={false}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box p={0}>
            {SidebarContainer}
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar