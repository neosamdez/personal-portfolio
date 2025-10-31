import styles from './NaoEncontrada.module.css';
import erro_404 from 'assets/erro_404.png';
import BotaoPrincipal from 'Componentes/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {

    const navegar = useNavigate(); 
    

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

                <p className={styles.paragrafo}>
                    A página que você está procurando não existe ou foi movida.
                </p>

                <p className={styles.paragrafo}>
                    Verifique o endereço ou volte para a página inicial.
                </p>

                <div className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar 
                    </BotaoPrincipal>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro_404}
                    alt='Cachorro de oculos vestido como humano'
                />
            </div>    

            <div className='styles.espacoEmBranco'>

            </div>
        </>
    );
}