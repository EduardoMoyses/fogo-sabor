import styles from './header.module.css'
import Menu from '../reutilizaveis/menu'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Header({titulo,fogo, className}) {

    const [abrirMenu, setabrirMenu] = useState(false)
    const location = useLocation()

    function mudarMenu() {
        setabrirMenu(prev => !prev)
    }

    useEffect(() => {
        setabrirMenu(false)
    },[location.pathname])

    return (
        <header className={`${styles[className]}`}>
            <img className={styles.logo} src={fogo} alt="icone fogo" />
            <h1 className={styles.titulo}>{titulo}</h1>
            <Menu abrirMenu={abrirMenu} onClick={mudarMenu}/>
        </header>
    )
}

export default Header