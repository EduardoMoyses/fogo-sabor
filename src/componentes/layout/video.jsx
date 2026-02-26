import Styles from './video.module.css'

function Video() {
    return (
            <div className={Styles.container_Pai}>
                <div className={Styles.container_Filho}>
                    <div className={Styles.itens}>
                        <h2> <i className="fa-solid fa-book-open"></i> Dicas do Chef</h2>
                        <p className={Styles.paragrafo}>Aprenda truques profissionais para elevar suas receitas do dia a dia.</p>
                        <div className={Styles.video_Pai}>
                            <div className={Styles.video_Filho}>
                                <div className={Styles.video_container}><iframe width="560" height="315" src="https://www.youtube.com/embed/OnGBXf-_xCU?si=fjzvCbgV-pI_rCDZ" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Video