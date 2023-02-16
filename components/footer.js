import Link from "next/link";
import styles from "../styles/footer.module.css"

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.navigation}>
          <Link href={'/'} >
            Inicio
          </Link>
          <Link href={'/about'} >
            Nosotros
          </Link>
          <Link href={'/store'} >
            Tienda
          </Link>
          <Link href={'/blog'} >
            Blog
          </Link>
        </nav>
        <p className={styles.copyrigth}> Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>

    </footer>
  )
}
