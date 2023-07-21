import {
    Box,
    Text,
    Flex,
    Center
  } from '@chakra-ui/react'
import FromNftCard from '../ui/FromNftCard'
import FromFilterPage from '../ui/FromFilterPage'
import FromNftPage from '../ui/FromNftPage'
import ReloadButton from '../ui/ReloadButton'
import HamsterButton from '../ui/HamsterButton'
import LoginButton from '../ui/LoginButton'

export default function Header(){

return(
    <Flex gridRow='1' justifyContent='space-around' w='100%' h='120px' bg='#1a1e1f' color='white'>
        <Center>
            <FromNftCard />
        </Center>
        <Center>
            <FromFilterPage />
        </Center>
        <Center>
            <FromNftPage />
        </Center>
        <Center>
            <ReloadButton/>
        </Center>
        <Center>
            <HamsterButton/>
        </Center>
        <Center>
            <LoginButton />
        </Center>
    </Flex>
)
}
