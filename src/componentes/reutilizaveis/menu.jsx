import Styles from './menu.module.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Menu({ abrirMenu, onClick }) {

  useEffect(() => {
    document.body.classList.toggle('travado', abrirMenu)
    return () => document.body.classList.remove('travado')
  }, [abrirMenu])

  return (
    <>
      <div className={`${Styles.icon_Menu} ${abrirMenu ? Styles.ativo : ''}`}onClick={onClick}>
          <div className={Styles.bar1}>
            <i className="fa-solid fa-bars"></i>
          </div>

          <div className={Styles.bar2}>
            <i className="fa-solid fa-xmark"></i>
          </div>
</div>

      <nav className={`${Styles.menu} ${abrirMenu ? Styles.menuAberto : ''}`}>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/lista" >Lista de receitas</Link></li>
          <li>
            <a 
              href="https://github.com/eduardomoyses" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu