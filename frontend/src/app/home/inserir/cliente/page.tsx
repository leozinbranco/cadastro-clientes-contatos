'use client'
import { Button, FormErrorMessage, Box, Text, FormControl, IconButton, Flex, FormLabel, FormHelperText, Input } from '@chakra-ui/react'
import { SetStateAction, useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

interface Cliente {
  nome?: string
  email?: string
  telefones?: string[]
}

export default function InserirCliente () {
  const [dadosCliente, setDadosCliente] = useState<Cliente>({
    nome: '',
    email: '',
    telefones: []
  })
  const [inputTelefone, setInputTelefone] = useState('')
  const handleInputEmailChange = (e: { target: { value: SetStateAction<string> } }) => {
    setDadosCliente((prevDadosCliente) => ({ ...prevDadosCliente, email: (e.target.value as string) }))
  }
  const handleInputNomeChange = (e: { target: { value: SetStateAction<string> } }) => {
    setDadosCliente((prevDadosCliente) => ({ ...prevDadosCliente, nome: (e.target.value as string) }))
  }
  const handleInputTelefoneChange = (e: { target: { value: SetStateAction<string> } }) => setInputTelefone(e.target.value)
  const isErrorEmail = dadosCliente.email === ''
  const isErrorNome = dadosCliente.nome === ''
  const adicionaTelefone = () => {
    setDadosCliente((prevDadoCliente) => ({ ...prevDadoCliente, telefones: [...prevDadoCliente.telefones!, inputTelefone] }))
  }
  const enviarDadosCliente = () => {
    console.log(dadosCliente)
  }

  const isErrorTelefone = inputTelefone.length === 0
  return (
    <Flex justifyContent='center' alignItems='center' width='100%' flexDirection='column'>
      <Box marginBottom={30}>
        <Text as='b' fontSize='xl' >Inserção de clientes</Text>

      </Box>
      <Flex width='40%' minWidth={300} flexDirection='column'>
        <FormControl isInvalid={isErrorNome}>

          <FormLabel>Nome completo</FormLabel>
          <Input value={dadosCliente.nome} onChange={handleInputNomeChange} />
          {!isErrorNome
            ? (
              <FormHelperText>
                Coloque o nome do cliente.
              </FormHelperText>
              )
            : (
              <FormErrorMessage>Nome completo é requerido.</FormErrorMessage>
              )}
          <Box marginTop={5}>

            <FormLabel >Email</FormLabel>
            <Input type='email' value={dadosCliente.email} onChange={handleInputEmailChange} />
            {!isErrorEmail
              ? (
                <FormHelperText>
                  Coloque o email do cliente.
                </FormHelperText>
                )
              : (
                <FormErrorMessage>Email é requerido.</FormErrorMessage>
                )}
          </Box>
          <Box marginTop={5}>

            <FormLabel >Telefones</FormLabel>
            <Flex justifyContent='space-between'>

              <Input type='number' value={inputTelefone} onChange={handleInputTelefoneChange} maxW='50%' />
              <IconButton aria-label='Search database' onClick={adicionaTelefone} icon={<FiPlus />} />
            </Flex>
            {!isErrorTelefone
              ? (
                <FormHelperText>
                  Após inserir 1 telefone, clique no botão ao lado.
                </FormHelperText>
                )
              : (
                <FormErrorMessage>Telefone é requerido.</FormErrorMessage>
                )}
            <Flex marginTop={5} flexDirection='column'>

              {
              dadosCliente.telefones!.map((telefone, index) => <Flex marginTop={1} key={'key' + telefone}>
                <Text fontWeight={600} marginRight={5}>
                  Tel. {index + 1}
                </Text>
                <Text>
                  {telefone}
                </Text>
              </Flex>
              )
            }
            </Flex>
          </Box>
        </FormControl>
        <Flex justifyContent='center' marginTop={8}>
          <Button colorScheme='teal.100' variant='outline' onClick={enviarDadosCliente}>
            Enviar
          </Button>
        </Flex>

      </Flex>
    </Flex>
  )
}
