import BuscarViagens from "./pages/buscarviagens/BuscarViagens"
import Home from "./pages/home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buscarviagens/:bairro_partida/:cidade_partida/:bairro_destino/:cidade_destino/:data_partida' element={<BuscarViagens />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
