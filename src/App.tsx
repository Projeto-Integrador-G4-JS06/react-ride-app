import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormViagem from "./components/viagem/viagemcadastro/FormViagem";
import ListaViagens from "./components/viagem/listaviagem/ListaViagem";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ListaVeiculos from "./components/veiculos/listaveiculos/ListaVeiculos";
import FormVeiculo from "./components/veiculos/veiculocadastro/FormVeiculo";
import Sobre from "./pages/sobre/Sobre";
import DeletarViagem from "./components/viagem/deletarviagem/DeletarViagem";
import DeletarVeiculo from "./components/veiculos/deletarveiculo/DeletarVeiculo";
import Home from "./pages/home/Home";
import BuscarViagens from "./pages/buscarviagens/BuscarViagens";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/buscarviagens/:bairro_partida/:cidade_partida/:bairro_destino/:cidade_destino/:data_partida' element={<BuscarViagens />} />
          <Route path="/cadastrarviagem" element={<FormViagem />} />
          <Route path="/editarviagem/:id" element={<FormViagem />} />
          <Route path="/viagens" element={<ListaViagens />} />
          <Route path="/veiculos" element={<ListaVeiculos />} />
          <Route path="/cadastrarveiculo" element={<FormVeiculo />} />
          <Route path="/atualizarveiculo/:id" element={<FormVeiculo />} />
          <Route path="/deletarviagem/:id" element={<DeletarViagem />} />
          <Route path="/deletarveiculo/:id" element={<DeletarVeiculo />} />
          <Route path="/sobre" element={<Sobre />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
