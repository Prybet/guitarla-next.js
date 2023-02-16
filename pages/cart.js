import Layout from "@/components/layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/cart.module.css"

export default function Cart({ cart, updateQtyCart, deleteGuitarCart }) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(cart?.reduce((total, product) => total + (product.qty * product.price), 0));
    }, [cart]);
    return (
        <Layout title="Carrito de compras">
            <main className="container">
                <h1 className="heading"> Carrito </h1>
                <div className={styles.content}>
                    <div className={styles.cart}>
                        <h2>Articulos</h2>
                        {cart?.length === 0 ? 'Carrito Vacio' : (
                            cart?.map(product => (
                                <div key={product.id} className={styles.product}>
                                    <div>
                                        <Image width={250} height={480} src={product.image} alt={product.name} />
                                    </div>
                                    <div>
                                        <p className={styles.name}> {product.name}</p>
                                        <div className={styles.qty}>
                                            <label htmlFor="qty">Cantidad:</label>
                                            <select
                                                id="qty"
                                                className={styles.select}
                                                onChange={e => updateQtyCart({ id: product.id, qty: parseInt(e.target.value) })}
                                                value={product.updateQtyCart} >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <p className={styles.price}> $<span>{product.price}</span></p>
                                        <p className={styles.subtotal}> Subtotal: <span>{product.qty * product.price}</span></p>
                                    </div>
                                    <button
                                        type="button"
                                        className={styles.delete}
                                        onClick={() => deleteGuitarCart(product.id)}
                                    >x</button>
                                </div>
                            ))
                        )}
                    </div>
                    <aside className={styles.summary}>
                        <h3>Resumen del Pedido</h3>
                        <p>Total a pagar: {total}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}
