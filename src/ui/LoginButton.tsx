import { Button } from '@chakra-ui/react'

export default function LoginButton(){
    return(
        <Button
            width='120px'
            height='54px'
            fontSize='18px'
            fontWeight='500'
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
            Login
        </Button>
    )
}