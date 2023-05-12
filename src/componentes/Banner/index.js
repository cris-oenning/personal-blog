import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, mundo!
        </h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu blog pessoal! Eu sou Cristopher Oenning, Full Stack Software Engineer. Aqui compartilho vários conhecimentos, espero que aprenda algo novo!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />

        <img 
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Cristopher Oenning"
        />
      </div>
    </div>
  )
}