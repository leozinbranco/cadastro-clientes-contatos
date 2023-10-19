import { Contato } from '@/domain/entities'
import { Input, Button, ModalHeader, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter } from '@chakra-ui/react'
import { FC, useState, SetStateAction } from 'react'

interface IModalInserirContato {
  onEnviar: (contato: Contato) => void
}

export const ModalInserirContato: FC<IModalInserirContato & { isOpen: boolean, onClose: () => void }> = ({ onEnviar, isOpen, onClose }) => {
  const [contato, setContato] = useState<
  Contato
  >({
    nome: '',
    email: '',
    tel1: '',
    tel2: ''
  })
  const handleEnviar = () => {
    if (contato) {
      onEnviar(contato)
      setContato({
        nome: '',
        email: '',
        tel1: '',
        tel2: ''
      })
    }
  }

  const handleInputEmailChange = (e: { target: { value: SetStateAction<string> } }) => {
    setContato((prevDadosCliente) => ({ ...prevDadosCliente, email: (e.target.value as string) }))
  }
  const handleInputNomeChange = (e: { target: { value: SetStateAction<string> } }) => {
    setContato((prevDadosCliente) => ({ ...prevDadosCliente, nome: (e.target.value as string) }))
  }
  const handleInputTel1 = (e: { target: { value: SetStateAction<string> } }) => {
    setContato((prevDadosCliente) => ({ ...prevDadosCliente, tel1: (e.target.value as string) }))
  }
  const handleInputTel2 = (e: { target: { value: SetStateAction<string> } }) => {
    setContato((prevDadosCliente) => ({ ...prevDadosCliente, tel2: (e.target.value as string) }))
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose()
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Inserir novo contato</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input value={contato?.nome} placeholder='Nome completo' onChange={handleInputNomeChange}/>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input value={contato?.email} type='email' onChange={handleInputEmailChange} placeholder='email@example.com' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Telefone 1</FormLabel>
            <Input value={contato?.tel1} type='tel' onChange={handleInputTel1} placeholder='(19) 900101-0101' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Telefone 2</FormLabel>
            <Input value={contato?.tel2} type='tel' onChange={handleInputTel2} placeholder='(19) 900101-0101' />
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
