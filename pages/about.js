import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/about.module.css"
export default function About() {
    return (
        <Layout title="Nosotros" description="Sobre nosotros, guitarLA, tienda de musica">
            <main className="container">
                <h2 className="heading"> Nosotros</h2>

                <div className={styles.content}>
                    <Image src="/img/about.jpg" width={1000} height={800} alt="Image about us" />
                    <div>
                        <p>
                            Cras placerat leo lorem, non aliquet elit vestibulum sed.
                            Nulla ut tincidunt urna. Aliquam bibendum lorem non imperdiet dapibus.
                            Sed porta, ex malesuada scelerisque tincidunt, lorem ex facilisis nibh,
                            dignissim sem justo at ipsum. Proin efficitur rhoncus lorem. Pellentesque
                            in feugiat felis, facilisis fermentum augue.
                        </p>
                        <p>
                            Praesent et lorem dapibus purus tristique commodo id quis sapien. Morbi ac molestie sapien
                            Donec eleifend est eget lacinia facilisis. Phasellus ut semper justo. Curabitur lacinia,
                            urna at efficitur ullamcorper, leo augue condimentum turpis, quis ultricies massa purus ac
                            magna. Aliquam laoreet ultrices augue nec feugiat. Pellentesque vitae libero ultricies ligula
                            blandit consequat vel rhoncus sapien parturient montes, nascetur ridiculus mus.
                        </p>

                    </div>
                </div>
            </main>
        </Layout>
    )
}
