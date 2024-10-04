import { useState } from 'react'

import './App.css'
import formulario from './components.jsx/formulario'
import formulario2 from './components.jsx/formulario2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <formulario/>
    <formulario2/>
    <formulario3/>

    </>
  )
}

export default App
