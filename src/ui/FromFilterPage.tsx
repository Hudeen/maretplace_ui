import {
    Button
} from '@chakra-ui/react'

export default function FromFilterPage(){
    return(
        <Button
            width='252px'
            height='54px'
            fontSize='20px'
            color='#ffffff'
            bgColor='#571FB1'
            borderRadius='8px'
            fontFamily='Roboto Flex'
            _hover={{
                bgColor:'#46198e'
            }} 
            _active={{
                bgColor:'#34136a'
            }}
        >
            Apply
        </Button>
    )
}