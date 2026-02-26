import { Link } from 'react-router-dom'
import receitas from '../../data/receitas'
import Styles from './lista.module.css'

function Lista() {
    const todasReceitas = receitas.categorias
        .flatMap(cat => cat.receitas)

    return (
        <div className={Styles.container}>
            {todasReceitas.map((receita) => (
                <div className={Styles.infos} key={receita.id}>
                    <h3>{receita.nome}</h3>

                    <img 
                        src={receita.imagem} 
                        alt={receita.nome} 
                        className={Styles.imagem}
                    />

                    <Link className={Styles.link} to={`/pratos/${receita.id}`}>
                        <button className={Styles.botao}>Ver receita</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Lista
