
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Sobre from './pages/sobre/Sobre'

function App() {
  

  return (
    <>
    
   <BrowserRouter>
            <Navbar />
            <div >
            <Sobre/>
            </div>
            <Footer />
   </BrowserRouter>

    </>
  )
}

export default App
