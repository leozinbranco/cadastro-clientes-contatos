'use client'
import { useDisclosure, TableContainer, Card, CardBody, Button, Modal, ModalOverlay, ModalHeader, ModalContent, ModalFooter, ModalCloseButton, ModalBody, Box, Text, Table, Thead, Tbody, Th, Tr, Td, Flex, IconButton } from '@chakra-ui/react'
import { EditIcon } from '@/public/icons/edit-icon'
import { EyeIcon } from '@/public/icons/eye-icon'
import { DeleteIcon } from '@/public/icons/delete-icon'
import { Person } from '@/public/icons/person'
import { Cliente } from '@/domain/entities'
import { useState } from 'react'
const columns = [
  { label: 'Id' },
  { label: 'Nome' },
  { label: 'Email' },
  { label: 'Data de registro' },
  { label: 'Ações' }
]
const rows: Cliente[] = [
  {
    id: 1,
    nome: 'João da Silva',
    email: 'joao.silva@email.com',
    telefones: [
      '555-234-7777',
      '888-543-0000'
    ],
    dataRegistro: new Date('2023-10-11')
  },
  {
    id: 2,
    nome: 'Maria Souza',
    email: 'maria.souza@email.com',
    telefones: [
      '555-232-7777',
      '888-999-1234'
    ],
    dataRegistro: new Date('2023-10-10')
  },
  {
    id: 3,
    nome: 'Carlos Pereira',
    email: 'carlos.pereira@email.com',
    telefones: [
      '555-123-7777',
      '888-999-0000'
    ],
    dataRegistro: new Date('2023-10-09')
  },
  {
    id: 4,
    nome: 'Ana Santos',
    email: 'ana.santos@email.com',
    telefones: [
      '555-324-7777',
      '888-232-0000'
    ],
    dataRegistro: new Date('2023-10-08')
  }
]

const contatosId1: Contato[] = [
  {
    id: 301,
    nomeCompleto: 'Narguila',
    telefones: ['19995104423', '19932345332']

  },
  {
    id: 302,
    nomeCompleto: 'Marcia',
    telefones: ['19995004123', '19932345432']
  }
]
interface Contato {
  id: number
  nomeCompleto: string
  telefones: string[]
}

export default function Home () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedClient, setSelectedClient] = useState<Cliente | undefined>({
    id: 0,
    nome: 'default-name',
    email: 'default-email',
    telefones: [
      '000-000-000'
    ],
    dataRegistro: 'defaultData'
  })
  const handleOpenModal = (id: number) => {
    if (id) {
      const selected: Cliente | undefined = rows.find((element) => Number(element.id) === id)
      setSelectedClient(selected)
      onOpen()
    }
  }

  return (
    <>
      <Flex justifyContent='center' alignItems='center' width='100%' flexDirection='column'>
        <Box marginBottom={30}>
          <Text as='b' fontSize='xl' >Visualização de clientes</Text>

        </Box>
        <TableContainer width='100%'>
          <Table variant='simple' size='lg'>
            <Thead>
              <Tr>
                {columns.map(column => (<Th>{column.label}</Th>))}
              </Tr>
            </Thead>
            <Tbody>
              {rows.map(row => (<Tr>
                <Td>{row.id}</Td>
                <Td>{row.nome}</Td>
                <Td>{row.email}</Td>
                <Td >{row.dataRegistro.toString()}</Td>
                <Td >
                  <Flex flexDirection='row' justifyContent='space-evenly'>
                    <IconButton aria-label='Ver cliente' onClick={() => handleOpenModal(Number(row.id))} width={2} icon={<EyeIcon />} />
                    <IconButton aria-label='Ver cliente' width={2} icon={<DeleteIcon />} />
                    <IconButton aria-label='Ver cliente' width={2} icon={<EditIcon />} />
                  </Flex>
                </Td>
              </Tr>))}
            </Tbody>

          </Table>
        </TableContainer>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>{selectedClient?.nome}
            <Flex flexDirection='column' marginTop={3}>

              <Flex flexDirection='row'>
                <Text fontSize='md' marginRight={2} > Email:</Text>
                <Text fontSize='md' fontWeight={300}>{selectedClient?.email}</Text>
              </Flex>
              <Flex flexDirection='row'>
                <Text fontSize='md'marginRight={2} > Data de registro:</Text>
                <Text fontSize='md' fontWeight={300}>{selectedClient?.dataRegistro.toString()}</Text>
              </Flex>
              {selectedClient?.telefones.map((tel, index) => (
                <Flex flexDirection='row' marginLeft={6}>
                  <Text fontSize='md'marginRight={2} fontWeight={500} > Telefone {index + 1}:</Text>
                  <Text fontSize='md' fontWeight={300}>{tel}</Text>
                </Flex>
              ))}
            </Flex>

          </ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Text marginBottom={5} fontWeight={500}>Contatos de {selectedClient?.nome}:</Text>
            {
              contatosId1.map((contato) => (<Card marginBottom={5}>
                <CardBody>
                  <Flex justifyContent='space-between' alignItems='center'>
                    <Box width={10} height={10}>
                      <Person />
                    </Box>
                    <Flex flexDirection='column' >
                      <Text marginLeft={3}>{contato.nomeCompleto}</Text>
                      <Flex marginLeft={3} justifyContent='space-between' width={350} marginRight={2} >
                        <Flex flexDirection='row'>
                          <Text fontSize={15} fontWeight={600}>Tel. 1:</Text>
                          <Text fontSize={15}marginLeft={3}>{contato.telefones[0]}</Text>
                        </Flex>
                        <Flex flexDirection='row'>
                          <Text fontSize={15} fontWeight={600}>Tel. 2:</Text>
                          <Text fontSize={15}marginLeft={3}>{contato.telefones[1]}</Text>
                        </Flex>

                      </Flex>
                    </Flex>
                    <Flex flexDirection='column'>
                      <IconButton aria-label='Ver cliente' width={1} size='sm' icon={<DeleteIcon />} />
                      <IconButton aria-label='Ver cliente' width={1} size='sm' marginTop={2} icon={<EditIcon />} />

                    </Flex>
                  </Flex>
                </CardBody>
              </Card>))
            }

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}
