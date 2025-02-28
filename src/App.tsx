import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormViagem from "./components/viagem/viagemcadastro/FormViagem";
import ListaViagens from "./components/viagem/listaviagem/ListaViagem";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cadastrarviagem" element={<FormViagem />} />
          <Route path="/editarviagem/:id" element={<FormViagem />} />
          <Route path="/viagens" element={<ListaViagens />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
