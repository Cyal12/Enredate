
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Prueba from './Prueba'
import Navbar from './Navbar'
import Home from './Home'
import CreateAccount from './CreateAccount'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/prueba' element={<Prueba/>}/>
          <Route path='/createAccount' element={<CreateAccount/>}/>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
