import { Flex, Text, Link, Image, Divider, Box } from '@chakra-ui/react'
import { FiHome, FiPhone, FiUsers, FiLogOut } from 'react-icons/fi'

const menuItems = [
  { id: 1, label: 'Dashboard', icon: () => <FiHome size={20} color='#FFFFFF'/>, link: '/home' },
  { id: 2, label: 'Cadastrar cliente', icon: () => <FiUsers size={20} color='#FFFFFF' />, link: '/home/inserir/cliente' },
  { id: 3, label: 'Cadastrar contato', icon: () => <FiPhone size={20} color='#FFFFFF'/>, link: '/inserir/contato' }
]

export const Sidebar = () => {
  return (
    <Flex h='100vh' bgColor='#02043E' width={250} minW={250} flexDirection='column' >
      <Flex h='10%' justifyContent='center' alignItems='center' paddingLeft={5} paddingBottom={3} paddingTop={5} paddingRight={5}>
        <Image w={100} h={10} src='../../images/clienthub.png'/>
      </Flex>
      <Box position='relative' padding='4'>
        <Divider orientation='horizontal'/>
      </Box>
      <Flex flexDirection='column'>
        {menuItems.map(({ icon, label, link }) => (
          <Link href={link} color='#FFFFFF' key={label}>
            <Flex flexDirection='row' padding={4}>
              <Flex marginRight={5} alignItems='center'>
                {icon()}
              </Flex>
              <Text>
                {label}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
      <Flex flexDirection='column' >
        <Flex padding='4' >
          <Divider orientation='horizontal' />
        </Flex>
        <Flex justifyContent='center' flexDirection='column' h='100%'>
          <Link color='#FFFFFF' marginLeft={5}>
            <Flex flexDirection='row' >
              <Flex marginRight={5} alignItems='center'>
                <FiLogOut size={20} color='#FFFFFF' />
              </Flex>
              <Text>
                Sair
              </Text>
            </Flex>
          </Link>

        </Flex>
      </Flex>
    </Flex>
  )
}
