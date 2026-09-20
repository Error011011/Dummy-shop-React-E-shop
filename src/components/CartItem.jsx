import React from 'react'
import { useRef } from 'react'
import { useCartStore } from '../store/store'
import { AiOutlineDelete } from "react-icons/ai";



const CartItem = ({product}) => {
    const quantityRef = useRef()

    const removeFromCart = useCartStore((s) => s.removeFromCart)
    const updateQuantity = useCartStore((s) => s.updateQuantity)

  return (
    <tr className="grid grid-cols-5 gap-0 place-items-center border-b border-gray-200">
        <th className="px-4 py-9 grow-0 text-left text-sm font-semibold text-black">
        <img className='grow-0' src={product.image} alt="Product image" />
        </th>
        <th className="px-4 py-9 text-sm text-black">
        {product.title}
        </th>
        <th className="px-4 py-9  text-sm text-black">
        <input onBlur={() => updateQuantity(product.id, Number(quantityRef.current.value))} className='w-full lg:w-auto py-2 px-3 md:py-5 border border-gray-200  rounded-full' ref={quantityRef} type="number" defaultValue={product.quantity}/>
        </th>
        <th className="px-4 py-9  text-sm text-black">
        {(product.price*product.quantity).toFixed(2)}
        </th>
        <th className="px-4 py-3 text-sm text-black">
        <button type='button' onClick={() => removeFromCart(product.id)}><AiOutlineDelete className='w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] text-[#f94449] cursor-pointer'/></button>
        </th>
    </tr>
  )
}

export default CartItem
