import { Button, Img } from '@chakra-ui/react'
import Hamster from '../assets/images/Hamster.svg'

export default function HamsterButton(){
    return(
        <Button
            width='40px'
            height='40px'
            borderRadius='50%'
            padding='8px'
            _hover={{
                bgColor:'#cccccc'
            }} 
            _active={{
                bgColor:'#999999'
            }}
        >
        <Img
            src={Hamster}
            width='24px'
            height='24px'
        />
        </Button>
    )
}