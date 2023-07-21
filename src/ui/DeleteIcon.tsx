import { Button, Img } from '@chakra-ui/react'
import Trash from '../assets/images/Trash.svg'

export default function DeleteButton(){
    return(
        <Button
            width='40px'
            height='40px'
            borderRadius='50%'
            padding='8px'
            _hover={{
                bgColor:'#A8E04E'
            }} 
            _active={{
                bgColor:'#65862F'
            }}
        >
        <Img
            src={Trash}
            width='24px'
            height='24px'
        />
        </Button>
    )
}