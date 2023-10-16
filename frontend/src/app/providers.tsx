'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme, Flex, Box } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()
  // const isHome = pathname === '/home'
  console.log(pathname)
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
