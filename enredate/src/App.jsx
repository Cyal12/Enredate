
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Prueba from './Prueba'
import Navbar from './Navbar'
import Home from './Home'
import CreateAccount from './CreateAccount'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/prueba' element={<Prueba/>}/>
          <Route path='/createAccount' element={<CreateAccount/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
