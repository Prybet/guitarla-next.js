import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"

export default function Header() {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <div className={`container ${styles.bar}`}>
                <Link href={'/'}>
                    <Image src="/img/logo.svg" width={300} height={40} alt="logo" />
                </Link>

                <nav className={styles.navigation}>
                    <Link href={'/'} className={router.pathname === '/' ? styles.active : ''}>
                        Inicio
                    </Link>
                    <Link href={'/about'} className={router.pathname === '/about' ? styles.active : ''}>
                        Nosotros
                    </Link>
                    <Link href={'/store'} className={router.pathname === '/store' ? styles.active : ''}>
                        Tienda
                    </Link>
                    <Link href={'/blog'} className={router.pathname === '/blog' ? styles.active : ''}>
                        Blog
                    </Link>
                    <Link href={'/cart'}>
                        <Image src="/img/cart.png" width={30} height={25} alt="cart image" />
                    </Link>
                </nav>
            </div>
        </header >
    )
}
