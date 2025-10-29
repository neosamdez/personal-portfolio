import styles from './Banner.module.css';
import circuloColorido from "assets/circulo_colorido.png";


export default function Banner()   {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, eu sou Neosam
                </h1>

                <p className={styles.paragrafo}>
                    Bem vindo ao meu portfolio, Eu sou um desenvolvedor fullstack apaixonado por criar experiências digitais incríveis. Aqui você encontrará meus projetos, habilidades e um pouco sobre minha jornada na programação.
                </p>
            </div>    

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src = {circuloColorido}
                    aria-hidden = {true}
                    alt = "Circulo colorido decorativo"
                />
                
                <img 
                    className={styles.minhaFoto}
                    src = {`https://github.com/neosamdez.png`}
                    alt = "minha foto Neosam"
                />
            </div>    
        </div>
    )
}