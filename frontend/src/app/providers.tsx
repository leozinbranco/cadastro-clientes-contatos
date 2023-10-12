'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { usePathname } from 'next/navigation'
import { NextUIProvider } from '@nextui-org/react'

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
  const isHome = pathname === '/home'
  console.log(pathname)
  return (
    <CacheProvider>
      {/* <NextUIProvider> */}
      <ChakraProvider theme={theme}>
        <Flex >
          {isHome && <Sidebar />}
          {children}
        </Flex>
      </ChakraProvider>
      {/* </NextUIProvider> */}
    </CacheProvider>
  )
}
