'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    // eslint-disable-next-line @typescript-eslint/quotes
    body: `'Poppins', sans-serif`
  },
  colors: {
    teal: {
      100: '#407BFF '
    }
  }
})

export function Providers ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
