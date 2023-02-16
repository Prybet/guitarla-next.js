import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitars.module.css"

export default function Guitar({ guitar }) {
    const { name, description, price, url, image } = guitar;
    return (
        <div className={styles.guitar}>
            <Image width={600} height={400} src={image.data.attributes.formats.medium.url} alt={`Guitar image ${name}`} />
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>${price}</p>
                <Link className={styles.link} href={`/guitars/${url}`}> Ver producto</Link>
            </div>
        </div>
    )
}
