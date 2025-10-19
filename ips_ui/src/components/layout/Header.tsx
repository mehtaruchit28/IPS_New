import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, BellIcon } from '@chakra-ui/icons'

interface HeaderProps {
  onShowSidebar: () => void
  showSidebarButton?: boolean
}

const Header = ({ showSidebarButton = true, onShowSidebar }: HeaderProps) => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px={4}
      bg={bg}
      borderBottomWidth="1px"
      borderColor={borderColor}
      h="14"
      position="fixed"
      top={0}
      zIndex="sticky"
    >
      <Flex align="center">
        {showSidebarButton && (
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            onClick={onShowSidebar}
            variant="ghost"
            size="md"
            mr={2}
          />
        )}
        <Text fontSize="lg" fontWeight="bold">
          IPS UI
        </Text>
      </Flex>

      <HStack spacing={4}>
        <IconButton
          aria-label="Notifications"
          icon={<BellIcon />}
          variant="ghost"
          size="md"
        />
        <Menu>
          <MenuButton>
            <Avatar size="sm" name="User Name" src="/placeholder-avatar.jpg" />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  )
}

export default Header