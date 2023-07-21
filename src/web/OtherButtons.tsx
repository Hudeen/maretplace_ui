import {
    Box,
    Text,
    Flex,
    Center
  } from '@chakra-ui/react'
import PlayMarketButton from '../ui/PlayMarketButton'
import AppStoreButton from '../ui/AppStoreButton'
import SortBy from '../ui/SortBy'
import ClearFilter from '../ui/ClearFilter'

export default function Header(){

return(
    <Flex gridRow='1' justifyContent='space-around' w='100%' h='120px' bg='#1a1e1f' color='white'>
        <Center>
            <PlayMarketButton/>
            <AppStoreButton/>
            <SortBy/>
            <ClearFilter/>
        </Center>
    </Flex>
)
}