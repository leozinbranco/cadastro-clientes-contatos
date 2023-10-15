// import { useDisclosure, ModalPropsChakra, TableContainer, Card, CardBody, Button, Modal, ModalOverlay, ModalHeader, ModalContent, ModalFooter, ModalCloseButton, ModalBody, Box, Text, Table, Thead, Tbody, Th, Tr, Td, Flex, IconButton, ModalProps } from '@chakra-ui/react'
// // interface ICardAuth {
// //   onAuth: (cpf: string, senha: string) => void
// // }

// // export interface IAuth {
// //   cpf: string
// //   senha: string
// // }
// interface ModalProps extends ModalPropsChakra {
//   children: React.ReactNode
//   modalFooter: React.ReactNode
//   modalHeaderText: string
// }
// // : FC<ICardAuth>
// export const ModalVerCliente = ({ isOpen, onOpen, onClose }: ModalProps) => {
// //   const { isOpen, onOpen, onClose } = useDisclosure()

//   //   const handleOpenModal = (id: number) => {
//   //     onOpen()
//   //   }
//   return (<Modal isOpen={isOpen} onClose={onClose} size='xl'>
//     <ModalOverlay />
//     <ModalContent >
//       <ModalHeader>{selectedClient?.nome}
//         <Flex flexDirection='column' marginTop={3}>

//           <Flex flexDirection='row'>
//             <Text fontSize='md' marginRight={2} > Email:</Text>
//             <Text fontSize='md' fontWeight={300}>{selectedClient?.email}</Text>
//           </Flex>
//           <Flex flexDirection='row'>
//             <Text fontSize='md'marginRight={2} > Data de registro:</Text>
//             <Text fontSize='md' fontWeight={300}>{selectedClient?.dataRegistro}</Text>
//           </Flex>
//           {selectedClient?.telefones.map((tel, index) => (
//             <Flex flexDirection='row' marginLeft={6}>
//               <Text fontSize='md'marginRight={2} fontWeight={500} > Telefone {index + 1}:</Text>
//               <Text fontSize='md' fontWeight={300}>{tel}</Text>
//             </Flex>
//           ))}
//         </Flex>

//       </ModalHeader>
//       <ModalCloseButton />
//       <ModalBody >
//         <Text marginBottom={5} fontWeight={500}>Contatos de {selectedClient?.nome}:</Text>
//         {
//               contatosId1.map((contato) => (<Card marginBottom={5}>
//                 <CardBody>
//                   <Flex justifyContent='space-between' alignItems='center'>
//                     <Box width={10} height={10}>
//                       <Person />
//                     </Box>
//                     <Flex flexDirection='column' >
//                       <Text marginLeft={3}>{contato.nomeCompleto}</Text>
//                       <Flex marginLeft={3} justifyContent='space-between' width={350} marginRight={2} >
//                         <Flex flexDirection='row'>
//                           <Text fontSize={15} fontWeight={600}>Tel. 1:</Text>
//                           <Text fontSize={15}marginLeft={3}>{contato.telefones[0]}</Text>
//                         </Flex>
//                         <Flex flexDirection='row'>
//                           <Text fontSize={15} fontWeight={600}>Tel. 2:</Text>
//                           <Text fontSize={15}marginLeft={3}>{contato.telefones[1]}</Text>
//                         </Flex>

//                       </Flex>
//                     </Flex>
//                     <Flex flexDirection='column'>
//                       <IconButton aria-label='Ver cliente' width={1} size='sm' icon={<DeleteIcon />} />
//                       <IconButton aria-label='Ver cliente' width={1} size='sm' marginTop={2} icon={<EditIcon />} />

//                     </Flex>
//                   </Flex>
//                 </CardBody>
//               </Card>))
//             }

//       </ModalBody>

//       <ModalFooter>
//         <Button colorScheme='blue' mr={3} onClick={onClose}>
//           Fechar
//         </Button>
//       </ModalFooter>
//     </ModalContent>
//   </Modal>)
// }
