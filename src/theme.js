// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    primary: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})