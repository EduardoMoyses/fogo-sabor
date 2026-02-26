import Styles from './cards.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import receitas, { dificuldadeConfig } from '../../data/receitas'

function Cards({ categoriaAtiva }) {

  const [visiveis, setVisiveis] = useState(3)

  return (
    <section className={Styles.container}>

      {receitas.categorias
        .filter(categoria => categoria.id === categoriaAtiva)
        .map(categoria => (
          <div key={categoria.id} className={Styles.categoria}>
            <div className={Styles.grid}>
              {categoria.receitas.slice(0, visiveis).map(receita => (
                <div key={receita.id} className={Styles.card}>
                  <img
                    src={receita.imagem}
                    alt={receita.nome}
                    className={Styles.imagem}
                  />

                  <h3>{receita.nome}</h3>

                  <div className={Styles.info}>
                    <span><i className="fa-regular fa-clock"></i> {receita.tempo}</span>
                    <span>
                        <i className={dificuldadeConfig[receita.dificuldade].icone}></i>
                          {' '}
                          {dificuldadeConfig[receita.dificuldade].texto}
                    </span>
                    <Link to={`/pratos/${receita.id}`} className={Styles.link_Card}>Receita</Link>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        ))}
    </section>
  )
}

export default Cards
