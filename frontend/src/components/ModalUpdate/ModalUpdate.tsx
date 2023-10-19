import { Contato, Cliente } from '@/domain/entities'
import { Input, Button, ModalHeader, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter } from '@chakra-ui/react'
import { FC, useState, SetStateAction } from 'react'

interface IModalUpdate {
  onEnviar: (data: Contato | Cliente) => void
}

export const ModalUpdate: FC<IModalUpdate & { isOpen: boolean, onClose: () => void }> = ({ onEnviar, isOpen, onClose }) => {
  const [updateEntity, setUpdateEntity] = useState<
  Contato | Cliente
  >({
    nome: '',
    email: '',
    tel1: '',
    tel2: ''
  })
  const handleEnviar = () => {
    if (updateEntity) {
      setUpdateEntity({
        nome: '',
        email: '',
        tel1: '',
        tel2: ''
      })
      onEnviar(updateEntity)
    }
  }

  const handleInputEmailChange = (e: { target: { value: SetStateAction<string> } }) => {
    setUpdateEntity((prevDadosCliente) => ({ ...prevDadosCliente, email: (e.target.value as string) }))
  }
  const handleInputNomeChange = (e: { target: { value: SetStateAction<string> } }) => {
    setUpdateEntity((prevDadosCliente) => ({ ...prevDadosCliente, nome: (e.target.value as string) }))
  }
  const handleInputTel1 = (e: { target: { value: SetStateAction<string> } }) => {
    setUpdateEntity((prevDadosCliente) => ({ ...prevDadosCliente, tel1: (e.target.value as string) }))
  }
  const handleInputTel2 = (e: { target: { value: SetStateAction<string> } }) => {
    setUpdateEntity((prevDadosCliente) => ({ ...prevDadosCliente, tel2: (e.target.value as string) }))
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setUpdateEntity({
          nome: '',
          email: '',
          tel1: '',
          tel2: ''
        })
        onClose()
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Atualizar Valores</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input value={updateEntity?.nome} placeholder='Nome completo' onChange={handleInputNomeChange}/>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input value={updateEntity?.email} type='email' onChange={handleInputEmailChange} placeholder='email@example.com' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Telefone 1</FormLabel>
            <Input value={updateEntity?.tel1} type='tel' onChange={handleInputTel1} placeholder='(19) 900101-0101' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Telefone 2</FormLabel>
            <Input value={updateEntity?.tel2} type='tel' onChange={handleInputTel2} placeholder='(19) 900101-0101' />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleEnviar} colorScheme='blue' mr={3}>
            Enviar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
