import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../../styles/guitars.module.css"
import { useState } from "react";

export default function Product({ guitar, addToCart }) {
    const [qty, setQty] = useState(0);
    const { name, description, price, image } = guitar[0]?.attributes;

    const handleSubmit = e => {
        e.preventDefault();
        if (qty < 1) {
            alert("Cantidad no válida");
            return
        }

        addToCart({
            id: guitar[0].id,
            image: image.data.attributes.url,
            name,
            price,
            qty
        })

    }

    return (
        <Layout title={`Guitarra ${name}`} description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA">
            <div className={styles.guitar}>
                <Image width={600} height={400} src={image.data.attributes.url} alt={`Guitar image ${name}`} />
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="qty">Cantidad:</label>
                        <select id="qty" onChange={e => setQty(parseInt(e.target.value))}>
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input type="submit" value="Agregar al carrito" />
                    </form>
                </div>
            </div>
        </Layout>

    )
}

export async function getStaticPaths() {
    const { data } = await fetch(`${process.env.API_URL}/guitars`)
        .then(res => res.json());
    const paths = data?.map(guitar => ({
        params: {
            url: guitar.attributes.url
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {
    const { data: guitar } = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
        .then(res => res.json());

    return {
        props: { guitar }
    }
}


/*
export async function getServerSideProps({ params: { url } }) {
    const { data: guitar } = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
        .then(res => res.json());

    return {
        props: { guitar }
    }
}
*/