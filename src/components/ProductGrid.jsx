import React from 'react'
import Product from './Product'

const ProductGrid = ({products}) => {

    if(!products.length) return <div className='py-5 md:py-7 lg:py-15 text-center'>Товары не найдены...</div>
  
  return (
    <section>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-0 place-items-center'>
            {products?.map((product) => {
                return <Product key={product.id} image={product.images[0]} title={product.title} price={product.price} id={product.id}/>
            })}
            {/* добавить див, если ничего не найдено */}
        </div>
    </section>
  )
}

export default ProductGrid