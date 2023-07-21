import {
    Box,
    Text,
    Flex,
    Center
  } from '@chakra-ui/react'
import WebIcon from '../ui/WebIcon'
import DiscordIcon from '../ui/DiscordIcon'
import TwitterIcon from '../ui/TwitterIcon'
import DeleteIcon from '../ui/DeleteIcon'

export default function Icons(){

return(
    <Flex gridRow='1' justifyContent='space-around' w='100%' h='120px' bg='#1a1e1f' color='white'>
        <WebIcon />
        <DiscordIcon />
        <TwitterIcon />
        <DeleteIcon/>
    </Flex>
)
}