import Header from './componentes/layout/header'
import Conteudo from './componentes/layout/conteudo'
import { Routes, Route } from 'react-router-dom'
import Pratos from './componentes/pages/pratos'
import Lista from './componentes/pages/lista'
import { useLocation } from 'react-router-dom'
import imgfogo from './img/icone-fogo.png'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const location = useLocation();
  const [titulo, setTitulo] = useState('Fogo & Sabor')
  const isLista = location.pathname === '/lista'

  useEffect(() => {
    if (location.pathname === '/') {
      setTitulo('Fogo & Sabor')
    } 
    else if (location.pathname === '/lista') {
      setTitulo('Receitas')
    }
  }, [location.pathname])

  return (
    <div id="app-container">
      <Header titulo={titulo} fogo={imgfogo} className={isLista ? 'headerLista' : 'headerDefault'}/>
      <Routes>
        <Route path='/' element={<Conteudo/>}/>
        <Route path='/pratos/:id' element={<Pratos />} />
        <Route path='/lista' element={<Lista/>}/>
      </Routes>
    </div>
  )
}

export default App