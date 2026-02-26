import Styles from './botao.module.css'

function Botao({name, onClick}) {
    return <button className={Styles.botao} onClick={onClick}>{name}</button>
}

export default Botao