import { Card, Text, CardBody, CardHeader, Heading, Flex, Box, Input, Button } from '@chakra-ui/react'
import { FC, SetStateAction, useState } from 'react'

interface ICardAuth {
  onAuth: (cpf: string, senha: string) => void
}

export const CardLogin: FC<ICardAuth> = ({ onAuth }) => {
  const [user, setUser] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  const handleChangeUser = (e: { target: { value: SetStateAction<string> } }) => {
    setUser(e.target.value)
  }

  const handleChangeSenha = (e: { target: { value: SetStateAction<string> } }) => {
    setSenha(e.target.value)
  }
  const handleOnAuth = () => {
    onAuth(user, senha)
  }
  return (
    <Card padding='0px 42px 0px 42px' maxW='500px' >
      <CardHeader>
        <Flex gap='4' alignItems='center' flexWrap='wrap' justifyContent='center'>
          <Heading textAlign='center'> Login </Heading>
          <Box textAlign='center'>
            <Text>Conecte-se para visualizar seus clientes</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex flexDirection='column'>
          <Text>Usuario</Text>
          <Input variant='filled' mb='22px' value={user} onChange={handleChangeUser}/>
          <Text>Senha</Text>
          <Input variant='filled' type='password' mb='22px' value={senha} onChange={handleChangeSenha}/>
          <Flex flexDirection='column' alignItems='center' justifyContent='center'>
            <Button color='white' bgColor='#02043E' size='md' _hover={{ bg: '#212485' }} onClick={handleOnAuth}>
              Conecte-se
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card >
  )
}
