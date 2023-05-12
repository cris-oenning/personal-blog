import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Cristopher
      </h3>

      <img 
        src={fotoSobreMim}
        alto="Foto do Cristopher Oenning"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
            Ola, tudo bem? Meu nome é Cristopher Oenning, Full Stack Software Engineer web/mobile, e estou feliz de te ver por aqui.
      </p>
      <p className={styles.paragrafo}>
           Minha formação acadêmica inclui bacharelado em administração de empresas e graduando em análise e desenvolvimento de sistemas, além de diversos cursos e treinamentos certificados em linguagens de programação, frameworks e metodologias ágeis.
      </p>
      <p className={styles.paragrafo}>
          Tenho 17 anos de experiência profissional em gestão industrial/gerencial, onde participei de projetos ambiciosos que me permitiram ampliar minhas habilidades em liderança, gestão de equipes e resolução de problemas complexos.
      </p>
      <p className={styles.paragrafo}>
          Atualmente como empreendedor freelancer em desenvolvimento Full Stack web/mobile, desenvolvi habilidades técnicas em linguagens de programação com tecnologias e frameworks de ponta, como Html 5, CSS, JavaScript, TypeScript, NodeJs, Git, Sass, Bootstrap, React, React Native, SQL e MongoDb.
      </p>
      <p className={styles.paragrafo}>
          Com um mindset focado em inovação, estou sempre em busca de novas tecnologias e tendências que possam melhorar a qualidade dos meus projetos e entregar soluções eficazes para clientes e parceiros, sempre aplicando os conceitos de Arquitetura Sólida e Limpa.
      </p>
      <p className={styles.paragrafo}>
          Além disso, possuo fortes habilidades de comunicação e trabalho em equipe, o que me permite colaborar com outros desenvolvedores, designers e profissionais de outras indústrias. Possuir você pode aprender e compartilhar conhecimento.
      </p>
      <p className={styles.paragrafo}>
          *Formações:
          - Bacharel em Administração de Empresas
          - Desenvolvedor Full Stack Software Engineer (Web/Mobile)
          - Graduando em Análise e Desenvolvimento de Sistemas
      </p>
      <p className={styles.paragrafo}>
        *Conhecimentos Técnicos Certificados:
        - Html 5
        - Css
        - Javascript
        - Typescript
        - Node.Js
        - Git
        - Sass
        - Bootstrap
        - Bulma
        - React.Js
        - React Native
        - SQL
        - Sequelize
        - MongoDb
        - Express.Js
      </p>
      <p className={styles.paragrafo}>
        *Contatos:
        - E-mail: crisoenning@gmail.com
        - Instagram: instagram.com/cristopher_oenning
        - Github: github.com/cris-oenning
      </p>
    </PostModelo>
  )
}