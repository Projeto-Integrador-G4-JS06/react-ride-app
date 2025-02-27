import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormViagem from './components/viagemcadastro/FormViagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     < FormViagem />
    </>
  )
}

export default App
