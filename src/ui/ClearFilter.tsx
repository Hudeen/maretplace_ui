import { Button } from '@chakra-ui/react'

export default function ClearFilter(){
    return(
        <Button
            width='280px'
            height='54px'
            bg='none'
            border='2px solid #571FB1'
            gap='10px'
            padding='0px 13px'
            borderRadius= '8px'
            _hover={{
                bgColor:'#303435'
            }} 
            _active={{
                bgColor:'#303435'
            }}
        >
            Clear filter
        </Button>
    )
}