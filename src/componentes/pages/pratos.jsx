import Styles from './pratos.module.css'
import receitas, { dificuldadeConfig } from '../../data/receitas'
import { useParams } from "react-router-dom"


function Pratos() {
    const { id } = useParams()

    const receita = receitas.categorias
    .flatMap(cat => cat.receitas)
    .find(r => r.id === id)

    if (!receita) return <p>Receita não encontrada</p>

    const dificuldade = dificuldadeConfig?.[receita.dificuldade] ?? {}

    return (
        <div>
            <div className={Styles.container}>

                <h1 className={Styles.titulo}>{receita.nome}</h1>

                <img 
                    src={receita.imagem} 
                    alt={receita.nome}
                    className={Styles.imagem}
                />

                <div className={Styles.infos}>
                     <span>
                        <i className="fa-regular fa-clock"></i>
                        {receita.tempo}</span>
                    <span>
                        <i className={dificuldade.icone}></i>
                            <p>Dificuldade</p>
                            {dificuldade.texto}
                    </span>
                </div>

                <div className={Styles.ingredientes}>
                    <h2>Ingredientes</h2>
                    <ul>
                        {receita.ingredientes.map((item, index) => (
                            <li key={index}>
                                    {item}
                                </li>
                        ))}
                    </ul>
                </div>
                <div className={Styles.preparo}>
                    <h2>Modo de Preparo</h2>
                    <ol>
                        {receita.preparo.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>

                <aside>
                    <h2 className={Styles.titulo}>Dicas do chef</h2>
                    <div className={Styles.video}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/OH6Hf92s-C8?si=FUSe1HiHGD2De26B" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Pratos
