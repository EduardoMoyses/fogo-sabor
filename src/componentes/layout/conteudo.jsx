import Styles from './conteudo.module.css'
import cozinheiro from '../../img/cozinheiro1.jpg'
import Botao from '../reutilizaveis/botao'
import { useState, useEffect } from 'react'
import Filtro from '../reutilizaveis/filtro'
import Cards from './cards'
import receitas from '../../data/receitas'
import Video from './video'

function Conteudo() {
    const [ativo, setAtivo] = useState(false)
     const [categoriaAtiva, setCategoriaAtiva] = useState(
    receitas.categorias[0].id
  )

  function mudarCategoria(id) {
    setCategoriaAtiva(id)
    setAtivo(false)
}


    function filtroAberto() {
        setAtivo(true)
    }

    function filtroFechado() {
        setAtivo(false)
    }

    useEffect(() => {
        if(ativo) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [ativo])

    return (
        <main className={Styles.container}>
            <img className={Styles.img_principal} src={cozinheiro} alt="Cozinheiro" />
            <div className={Styles.botao}>
                <Botao name='Filtro' onClick={filtroAberto}/>
            </div>

            <Filtro ativo={ativo} onClose={filtroFechado} onSelectCategoria={mudarCategoria}/>

            <Cards categoriaAtiva={categoriaAtiva}/>

            <Video/>

        </main>
    )
}

export default Conteudo