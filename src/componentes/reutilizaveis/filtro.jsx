import Botao from "./botao"
import Styles from './filtro.module.css'
import receitas from '../../data/receitas'

function Filtro({ ativo, onClose, onSelectCategoria }) {
  return (
    <div className={`${Styles.overlay} ${ativo ? Styles.ativo : ''}`}>
      
      <div className={Styles.filtroContainer}>
        <div className={Styles.botaoFiltro}>
          <Botao name={<i className="fa-solid fa-x"></i>} onClick={onClose} />
        </div>

        <div className={Styles.filtroInfo}>
          <h2>Escolha uma Categoria</h2>
          <ul>
            {receitas.categorias.map(categoria => (
              <li
                key={categoria.id}
                onClick={() => onSelectCategoria(categoria.id)}
              >
                {categoria.nome}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Filtro