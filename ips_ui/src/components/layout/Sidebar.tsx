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
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { FiHome, FiUsers, FiSettings, FiDatabase } from 'react-icons/fi'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface NavItemProps {
  icon: any
  children: string
  href: string
}

const NavItem = ({ icon, children, href }: NavItemProps) => {
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
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? activeBg : 'transparent'}
        color={isActive ? activeColor : inactiveColor}
        _hover={{
          bg: activeBg,
          color: activeColor,
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      size="xs"
    >
      <DrawerOverlay />
      <DrawerContent bg={bg} borderRightWidth="1px" borderColor={borderColor}>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          Navigation
        </DrawerHeader>
        <DrawerBody p={0}>
          <VStack spacing={0} align="stretch">
            <NavItem icon={FiHome} href="/home">
              Dashboard
            </NavItem>
            <NavItem icon={FiUsers} href="/users">
              Users
            </NavItem>
            <NavItem icon={FiDatabase} href="/data">
              Data Management
            </NavItem>
            <NavItem icon={FiSettings} href="/settings">
              Settings
            </NavItem>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar