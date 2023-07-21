import { Box } from '@chakra-ui/react'
import Header from './web/Header'
import Icons from './web/Icons'
import OtherButtons from './web/OtherButtons'
import './style.css'

function App() {

  return (
    <Box className="App">
      <Header />
      <Icons/>
      <OtherButtons/>
    </Box>

  )

}

export default App
