import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="h-[70vh]"></div>

        <Routes>
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
