/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { Image, Flex } from '@chakra-ui/react'
import { CardLogin } from '@/components/CardLogin'
import { useLogin } from '@/hooks'
import { useRouter } from 'next/navigation'

export default function Home () {
  const { autenticaUsuario } = useLogin()
  const router = useRouter()

  const handleLogin = async (user: string, senha: string) => {
    try {
      await autenticaUsuario(user, senha)
      router.push('/home')
    } catch (err) {
      void alert(err)
    }
  }
  return (
    <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} minH='100vh' padding='6' alignItems='center' justifyContent='center' >
      <Flex flexDirection='column' alignItems='center'>
        <Image src='images/login-page.png'
          width='350px'
          height='350px'
        />
      </Flex>
      <CardLogin onAuth={handleLogin}/>
    </Flex>
  )
}
