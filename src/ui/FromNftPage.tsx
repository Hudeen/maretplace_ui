import {
    Button
} from '@chakra-ui/react'

export default function FromNftPage(){
    return(
        <Button
            width='289px'
            height='70px'
            fontSize='40px'
            color='#121619'
            bgColor='#A8E04E'
            borderRadius='8px'
            fontFamily='Roboto Flex'
            _hover={{
                bgColor:'#86b33e'
            }} 
            _active={{
                bgColor:'#65862f'
            }}
        >
            Buy now
        </Button>
    )
}