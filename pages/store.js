import Guitar from "@/components/guitar";
import Layout from "@/components/layout";
import styles from "../styles/grid.module.css"
export default function Store({ guitars }) {
    return (
        <Layout title="Tienda Virtual" description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA">
            <main className="container">
                <h1 className="heading">Nuestra Colección</h1>

                <div className={styles.grid}>
                    {guitars?.map(guitar => (
                        <Guitar key={guitar?.id} guitar={guitar?.attributes} />
                    ))}
                </div>

            </main>
        </Layout>
    )
}


export async function getServerSideProps() {
    const { data: guitars } = await fetch(`${process.env.API_URL}/guitars?populate=image`)
        .then(res => res.json());

    return {
        props: {
            guitars
        }
    }
}