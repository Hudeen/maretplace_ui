import {
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

  export default function SortBy(){
    return(
        <Menu >
              <MenuButton w='100px' h='50px' border='none' bg='#A8E04E' color='#121619' borderColor='none' placeholder='Sort by' _hover={{ bgColor:'#86b33e'}} _active={{ bgColor:'#65862f'}} as={Button} rightIcon={<ChevronDownIcon />}>Sort by</MenuButton>
                <MenuList minW='170px' className='MenuList' bg='#393939' border='2px' borderColor='#5B5B5B' boxShadow='2xl #571fb1'>
                    <MenuItem fontWeight='500' className='it' bg='#393939' _hover={{ color:'#A8E04E'}}><div className='circle'></div>Lowest price</MenuItem>
                    <MenuItem fontWeight='500' className='it' bg='#393939' _hover={{ color:'#A8E04E'}}><div className='circle'></div>Highest price</MenuItem>
                    <MenuItem fontWeight='500' className='it' bg='#393939' _hover={{ color:'#A8E04E'}}><div className='circle'></div>Latest</MenuItem>
                </MenuList>
        </Menu>
    )
}
