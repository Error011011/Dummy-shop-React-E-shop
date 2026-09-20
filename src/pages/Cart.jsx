import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router'
import { useCartStore } from '../store/store'
import CartItem from '../components/CartItem'



const Cart = () => {

  const items = useCartStore((s) => s.items)
  // const totalPrice = useCartStore((s) => s.getTotalPrice())
  // const totalItems = useCartStore((s) => s.getTotalItems())

  const totalPrice = useCartStore((s) =>
    s.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  )
  const totalItems = useCartStore((s) =>
    s.items.reduce((sum, i) => sum + i.quantity, 0)
  )
  const clearCart = useCartStore((s) => s.clearCart)



  return (
    
    <section className='py-5 md:py-7 lg:py-9'>
      <div className="container">
          <h2 className='mb-5 md:mb-7 lg:mb-15 text-semibold uppercase text-2xl md:text-4xl lg:text-6xl text-center'>Cart</h2>

          {items.length ?

          <div className='flex flex-col items-center gap-5 lg:gap-10'>
            {!items && <div className='py-5 md:py-7 lg:py-9 text-center'>Ошибка загрузки корзины...</div>}
            {items && 
            <table className='text-center'>
              <thead className='uppercase'>
                <tr className="grid grid-cols-5 gap-0  border-b border-gray-200">
                  <th className="py-3 md:py-5 text-sm text-black">
                    Image
                  </th>
                  <th className="py-3 md:py-5  text-sm text-black">
                    Name
                  </th>
                  <th className="py-3 md:py-5  text-sm text-black">
                    Quantity
                  </th>
                  <th className="py-3 md:py-5  text-sm text-black">
                    Total Price
                  </th>
                  <th className="py-3 md:py-5 text-sm text-black">
                    <button type='button' onClick={() => clearCart()} className='px-2 py-1 border-2 rounded-full uppercase text-black hover:bg-red-400 hover:text-white duration-300'>Clear</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((product)=> {
                  return <CartItem key={product.id} product={product}/>
                })}
              </tbody>
            </table>
            }
            <div className='flex justify-around items-center w-full text-md'>
              <span>Total products: {totalItems}</span>
              <span>Total price: {totalPrice.toFixed(2)} $</span>
            </div>
            <button className='px-5 py-3 border-2 rounded-full uppercase text-black hover:bg-black hover:text-white duration-300'><Link to={'#'}>Order</Link></button>
          </div>
          : <div className='py-9 text-center'>
            <h3 className='mb-9 text-lg'>There is nothing in the cart</h3>
            <button className='px-5 py-3 max-w-[50%] border-2 rounded-full uppercase text-black hover:bg-black hover:text-white duration-300'><Link to={'/catalog'}>Continue shopping...</Link></button>
            </div>}
      </div>
    </section>
  )
}

export default Cart