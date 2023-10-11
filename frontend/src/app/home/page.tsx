'use client'
import { Image, Flex, Box, Text } from '@chakra-ui/react'
export default function Home () {
  return (
    <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} padding='6' alignItems='center' justifyContent='center'>
      <Text>
        Apparently we had reached a great height in the atmosphere, for the
        sky was a dead black, and the stars had ceased to twinkle. By the same
        illusion which lifts the horizon of the sea to the level of the
        spectator on a hillside, the sable cloud beneath was dished out, and
        the car seemed to float in the middle of an immense dark sphere, whose
        upper half was strewn with silver. Looking down into the dark gulf
        below, I could see a ruddy light streaming through a rift in the
        clouds.
      </Text>
    </Flex>
  )
}
