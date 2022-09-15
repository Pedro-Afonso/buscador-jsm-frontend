import styles from './styles.module.css'
import logo2 from '../../assets/logo2.svg'
import facebook from '../../assets/socials/facebook.svg'
import linkedin from '../../assets/socials/linkedin.svg'
import instagram from '../../assets/socials/instagram.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img className={styles.logo} src={logo2} alt="Logo da Empresa" />
          <p>Juntos Somos Mais Fidelização S.A.</p>
          <p>Siga-nos nas redes sociais:</p>
          <div className={styles.socialLinks}>
            <a href="/">
              <img src={facebook} alt="Facebook da empresa" />
            </a>
            <a href="/">
              <img src={linkedin} alt="Linkedin da empresa" />
            </a>
            <a href="/">
              <img src={instagram} alt="Instagram da empresa" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
