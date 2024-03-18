
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Prueba from './components/Prueba';
import Navbar from './components/Navbar';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Explore from './Register/eXPLORE';
import CreateAccount from './Register/CreateAccount';

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/prueba' element={<Prueba/>}/>
          <Route path='/createAccount' element={<CreateAccount/>}/>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
