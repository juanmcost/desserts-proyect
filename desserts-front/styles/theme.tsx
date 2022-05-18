import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  background: 'white',
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const shadows = {
  outline: "0 0 0 3px rgba(66, 153, 225, 0)",
}

const fonts = {
  heading: 'Montserrat.700, sans-serif',
  body: 'Montserrat.100, sans-serif',
}

const theme = extendTheme({ 
  colors, 
  config,
  shadows,
  fonts
})

export default theme