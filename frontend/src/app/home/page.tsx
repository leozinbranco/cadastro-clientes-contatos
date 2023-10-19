/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { useDisclosure, TableContainer, Card, CardBody, Button, Modal, ModalOverlay, ModalHeader, ModalContent, ModalFooter, ModalCloseButton, ModalBody, Box, Text, Table, Thead, Tbody, Th, Tr, Td, Flex, IconButton } from '@chakra-ui/react'
import { EditIcon } from '@/public/icons/edit-icon'
import { EyeIcon } from '@/public/icons/eye-icon'
import { DeleteIcon } from '@/public/icons/delete-icon'
import { FiPlus } from 'react-icons/fi'
import { Person } from '@/public/icons/person'
import { Cliente, Contato } from '@/domain/entities'
import { useClientes, useContatos } from '@/hooks'
import { useState, useEffect } from 'react'
import { ModalInserirContato } from '@/components/ModalInserirContato'
import { IInsereContatoRequest } from '@/domain/port/outbound'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { ModalUpdate } from '@/components/ModalUpdate'

const columns = [
  { label: 'Id' },
  { label: 'Nome' },
  { label: 'Email' },
  { label: 'Data de registro' },
  { label: 'Ações' }
]

type UpdateEntity = {
  entity: SelectedEntity
  id: number
}

enum SelectedEntity {
  CLIENTE = 'cliente',
  CONTATO = 'contato',
}

export default function Home () {
  const { getClientes, deleteCliente, updateCliente } = useClientes()
  const { getContatosByClienteId, insereContato, deleteContato, updateContato } = useContatos()
  const [clientes, setClientes] = useState<
  Cliente[]
  >([])
  const [contatos, setContatos] = useState<
  Contato[]
  >([])
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isModalContatoOpen, setIsModalContatoOpen] = useState<boolean>(false)
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState<boolean>(false)
  const [selectedEntityUpdate, setSelectedEntityUpdate] = useState<UpdateEntity>()

  const [selectedClient, setSelectedClient] = useState<Cliente | undefined>({
    id: 0,
    nome: 'default-name',
    email: 'default-email',
    tel1: 'tel1',
    tel2: 'tel2',
    dataRegistro: new Date('2023-10-11')
  })
  const handleOpenModal = async (id: number) => {
    if (id) {
      const selected: Cliente | undefined = clientes.find((element) => Number(element.id) === id)
      await getContatosByClienteId(id).then((response) => {
        setSelectedClient(selected)
        setContatos(response)
        onOpen()
      })
    }
  }
  const handleUpdateEntity = async (entity: Contato | Cliente) => {
    try {
      if (selectedEntityUpdate?.entity === SelectedEntity.CLIENTE) {
        await updateCliente(entity, selectedEntityUpdate?.id)
        await fetchData()
      }
      if (selectedEntityUpdate?.entity === SelectedEntity.CONTATO) {
        await updateContato(entity, selectedEntityUpdate?.id)
        await getContatosByClienteId(selectedClient!.id).then((response) => {
          setContatos(response)
        })
      }
      closeModalUpdate()
    } catch (e) {
      alert(e)
    }
  }

  const openModalUpdate = () => {
    setIsModalUpdateOpen(true)
  }
  const openModalContato = () => {
    setIsModalContatoOpen(true)
  }

  const handleOnEnviarCriarNovoContato = async (contato: Contato) => {
    try {
      const contatoRequest: IInsereContatoRequest = {
        ...contato,
        clientesId: selectedClient!.id
      }
      await insereContato(contatoRequest)
      closeModalContato()
      await getContatosByClienteId(selectedClient!.id).then((response) => {
        setContatos(response)
      })
    } catch (e) {
      const { message } = e as AxiosError
      alert('Ocorreu um erro ao inserir um contato! ' + message)
    }
  }

  const closeModalContato = () => {
    setIsModalContatoOpen(false)
  }

  const closeModalUpdate = () => {
    setIsModalUpdateOpen(false)
  }

  const handleDeleteCliente = async (id: number) => {
    await deleteCliente(id).then(async () => await fetchData())
  }
  const handleDeleteContato = async (id: number) => {
    await deleteContato(id).then(async () => await getContatosByClienteId(selectedClient!.id).then((response) => {
      setContatos(response)
    }))
  }
  const fetchData = async () => {
    try {
      const data = await getClientes()
      setClientes(data)
    } catch (err) {
      const { code } = err as AxiosError
      if (code === 'ERR_BAD_REQUEST') { router.replace('/login') }
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

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
              {clientes.map(row => (<Tr>
                <Td>{row.id}</Td>
                <Td>{row.nome}</Td>
                <Td>{row.email}</Td>
                <Td >{row.dataRegistro.toString()}</Td>
                <Td >
                  <Flex flexDirection='row' justifyContent='space-evenly'>
                    <IconButton aria-label='Ver cliente' onClick={async () => await handleOpenModal(Number(row.id))} width={2} icon={<EyeIcon />} />
                    <IconButton aria-label='Deletar cliente' onClick={async () => await handleDeleteCliente(Number(row.id))} width={2} icon={<DeleteIcon />} />
                    <IconButton aria-label='Editar cliente' onClick={() => {
                      setSelectedEntityUpdate({ entity: SelectedEntity.CLIENTE, id: Number(row.id) })
                      openModalUpdate()
                    }} width={2} icon={<EditIcon />} />
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
              <Flex flexDirection='row' marginLeft={6}>
                <Text fontSize='md'marginRight={2} fontWeight={500} > Telefone 1:</Text>
                <Text fontSize='md' fontWeight={300}>{selectedClient?.tel1}</Text>
              </Flex>
              <Flex flexDirection='row' marginLeft={6}>
                <Text fontSize='md'marginRight={2} fontWeight={500} > Telefone 2:</Text>
                <Text fontSize='md' fontWeight={300}>{selectedClient?.tel2}</Text>
              </Flex>
            </Flex>

          </ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Flex justifyContent='space-between' alignItems='center'>
              <Text marginBottom={5} fontWeight={500}>Contatos de {selectedClient?.nome}:</Text>
              <IconButton marginRight={7} aria-label='Search database' size='xs' isDisabled={false} onClick={openModalContato} icon={<FiPlus />} />
            </Flex>
            {
              contatos.length > 0
                ? contatos.map((contato) => (<Card marginBottom={5}>
                  <CardBody>
                    <Flex justifyContent='space-between' alignItems='center'>
                      <Box width={10} height={10}>
                        <Person />
                      </Box>
                      <Flex flexDirection='column' >
                        <Text marginLeft={3}>{contato.nome}</Text>
                        <Flex marginLeft={3} justifyContent='space-between' width={350} marginRight={2} >
                          <Flex flexDirection='row'>
                            <Text fontSize={15} fontWeight={600}>Tel. 1:</Text>
                            <Text fontSize={15}marginLeft={3}>{contato.tel1}</Text>
                          </Flex>
                          <Flex flexDirection='row'>
                            <Text fontSize={15} fontWeight={600}>Tel. 2:</Text>
                            <Text fontSize={15}marginLeft={3}>{contato.tel2}</Text>
                          </Flex>

                        </Flex>
                      </Flex>
                      <Flex flexDirection='column'>
                        <IconButton aria-label='Deletar contato' width={1} size='sm' onClick={async () => await handleDeleteContato(contato.id!)} icon={<DeleteIcon />} />
                        <IconButton aria-label='Editar contato' width={1} size='sm' onClick={() => {
                          setSelectedEntityUpdate({ entity: SelectedEntity.CONTATO, id: contato.id! })
                          openModalUpdate()
                        }} marginTop={2} icon={<EditIcon />} />

                      </Flex>
                    </Flex>
                  </CardBody>
                </Card>))
                : <Text> {selectedClient?.nome} não tem contatos no momento </Text>
            }

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ModalInserirContato isOpen={isModalContatoOpen} onClose={closeModalContato} onEnviar={async (contato: Contato) => await handleOnEnviarCriarNovoContato(contato)}></ModalInserirContato>
      <ModalUpdate isOpen={isModalUpdateOpen} onClose={closeModalUpdate} onEnviar={async (entity: Contato | Cliente) => await handleUpdateEntity(entity)}></ModalUpdate>
    </>
  )
}
