import {
    Button
} from '@chakra-ui/react'

export default function FromNftCard(){
    return(
        <Button
            width='140px'
            height='54px'
            fontSize='20px'
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