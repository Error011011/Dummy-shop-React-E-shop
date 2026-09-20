import React from 'react'
import { Link } from 'react-router'

const Product = ({image, title, price, id}) => {
  return (
    <article className='pb-3 md:pb-5 flex flex-col hover:border md:max-w-[50vw]'>
      <Link to={`/product/${id}`}>
          <div>
              <img className='w-full h-full aspect-square object-cover' src={image} alt="Product image" />
          </div>
          <div className='px-5 flex flex-col gap-5'>
              <h3 className='uppercase text-semibold text-2xl sm:text-3xl lg:text-4xl line-clamp-1'>{title}</h3>
              <span className='text-xl md:text-2xl lg:text-4xl'>{price} $</span>
          </div>
      </Link>
        
    </article>
  )
}

export default Product