import { Flex, Box } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return <section><Flex marginLeft='auto' marginRight='auto' width='100%' >
    <Box>
      <Sidebar />
    </Box>
    {/* <Box width='100%' height='100vh' overflowX="auto"> */}
    <Flex width='100%' height='100vh' >

      {children}
    </Flex>
    {/* </Box> */}
  </Flex></section>
}
