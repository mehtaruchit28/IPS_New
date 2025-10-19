import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
        minHeight: '100vh',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'blue.500',
          color: 'white',
          _hover: {
            bg: 'blue.600',
          },
          _active: {
            bg: 'blue.700',
          },
        },
        outline: {
          borderColor: 'blue.500',
          color: 'blue.500',
          _hover: {
            bg: 'blue.50',
          },
        },
      },
    },
    Input: {
      variants: {
        filled: {
          field: {
            bg: 'white',
            borderWidth: '1px',
            borderColor: 'gray.200',
            _hover: {
              bg: 'gray.50',
            },
            _focus: {
              bg: 'white',
              borderColor: 'blue.500',
            },
          },
        },
      },
      defaultProps: {
        variant: 'filled',
      },
    },
    Container: {
      baseStyle: {
        maxW: 'container.xl',
        px: { base: 4, md: 8 },
      },
    },
    Heading: {
      baseStyle: {
        color: 'gray.800',
        fontWeight: 'bold',
      },
    },
  },
  colors: {
    brand: {
      50: '#E6F6FF',
      100: '#BAE3FF',
      200: '#7CC4FA',
      300: '#47A3F3',
      400: '#2186EB',
      500: '#0967D2',
      600: '#0552B5',
      700: '#03449E',
      800: '#01337D',
      900: '#002159',
    },
  },
  fonts: {
    heading: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  },
  shadows: {
    card: '0 2px 8px rgba(0, 0, 0, 0.06)',
  },
})
