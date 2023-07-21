import { Button, Img } from '@chakra-ui/react'
import SearchIcon from '../assets/images/SearchIcon.svg'

export default function ReloadButton(){
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
            src={SearchIcon}
            width='24px'
            height='24px'
        />
        </Button>
    )
}