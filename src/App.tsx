import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormViagem from "./components/viagem/viagemcadastro/FormViagem";
import ListaViagens from "./components/viagem/listaviagem/ListaViagem";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ListaVeiculos from "./components/veiculos/listaveiculos/ListaVeiculos";
import Sobre from "./pages/sobre/Sobre";
import Home from "./pages/home/Home";
import BuscarViagens from "./pages/buscarviagens/BuscarViagens";
import CardViagem from "./components/viagem/cardviagem/CardViagem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/buscarviagens/:bairro_partida/:cidade_partida/:bairro_destino/:cidade_destino/:data_partida' element={<BuscarViagens />} /> */}
          <Route path="/buscarviagens" element={<BuscarViagens />} />
          <Route path="/cadastrarviagem" element={<FormViagem />} />
          <Route path="/editarviagem/:id" element={<FormViagem />} />
          <Route path="/viagens" element={<ListaViagens />} />
          <Route path="/veiculos" element={<ListaVeiculos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/card" element={<CardViagem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
