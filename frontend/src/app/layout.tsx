import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Sidebar } from '@/components/Sidebar'
import { Flex } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OrderFlow'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Flex>
            <Sidebar />
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  )
}
