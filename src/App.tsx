
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
    
   <BrowserRouter>
            <Navbar />
            <div className="h-[70vh]"></div>
            <Footer />
   </BrowserRouter>

    </>
  )
}

export default App
