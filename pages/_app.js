import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : null;

  const [cart, setCart] = useState(cartLS);
  const [pageReady, setPageReady] = useState(false);

  useState(() => {
    setTimeout(() => {
      setPageReady(true);
    }, 100);
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  const addToCart = guitar => {

    if (cart.some(guitarState => guitarState.id === guitar.id)) {

      setCart(cart.map(guitarState => {
        if (guitarState.id === guitar.id) {
          guitarState.qty = guitar.qty;
        }
        return guitarState;
      }));
    } else {
      setCart([...cart, guitar]);
    }

  }

  const updateQtyCart = guitar => {
    setCart(
      cart.map(guitarState => {
        if (guitarState.id === guitar.id) {
          guitarState.qty = guitar.qty
        }
        return guitarState;
      })
    );
  }

  const deleteGuitarCart = id => setCart(cart.filter(guitarState => guitarState.id !== id));

  return pageReady ? <Component {...pageProps}
    cart={cart}
    addToCart={addToCart}
    updateQtyCart={updateQtyCart}
    deleteGuitarCart={deleteGuitarCart}
  /> : null
}
