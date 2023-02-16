import Layout from '@/components/layout'
import Link from 'next/link'
import React from 'react'

export default function Page404() {
    return (
        <Layout title="Pagina no encontrada" description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA">
            <p className='error'> Página no encontrada</p>
            <Link href={'/'} className='error-link'> Ir al inicio</Link>
        </Layout>

    )
}
