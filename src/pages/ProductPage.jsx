import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { GetOneProduct } from '../api/ProductService'
import Loader from '../components/Loader'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import { useStore } from 'zustand'
import { useCartStore } from '../store/store'
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react'
import { IoCheckmark } from "react-icons/io5";

const ProductPage = () => {
  const [toast, setToast] = useState(false)

  const params = useParams()
  const navigate = useNavigate()
  const quantityRef = useRef()

  const addToCart = useCartStore((s) => s.addToCart)

  const handleToast = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false)
    }, 2000);

  }
  

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['product', params.id],
    queryFn: () => GetOneProduct(params.id)
  })

  if(isLoading) return <Loader/>
  if(isError) return <div className='py-5 md:py-7 lg:py-9 text-center'>Ошибка загрузки товара...</div>


  return (
    <section className='relative py-7'>
      <div className="container">
        <div className='grid grid-cols-1 grid-rows-2 w-full xl:grid-cols-2 xl:grid-rows-1'>
          {/* image */}
          <div>
              <img className='w-full h-full aspect-square object-cover' src={data.images[0]} alt="Product image" />
          </div>

          {/* description */}
          <div className='flex flex-col gap-10 text-center xl:justify-center  '>
            <div>
              <h3 className='mb-3 uppercase text-semibold text-2xl sm:text-3xl lg:text-4xl line-clamp-2'>{data.title}</h3>
              <p>{data.sku}</p>
            </div>
              <span className='text-xl'>{data.price} $</span>
              <p>{data.description}</p>

              <div className='flex flex-col items-center gap-5'>
                <input ref={quantityRef} className='px-5 py-3 rounded-full border border-gray-400' min={1} type="number" placeholder='1' />
                <button type='button' onClick={() => {addToCart({id: data.id, image: data.thumbnail, title: data.title, price: data.price}, Number(quantityRef.current.value) || 1); handleToast()}} className='px-5 py-3 max-w-[50%] border-2 rounded-full uppercase text-black hover:bg-black hover:text-white duration-300'>Add to cart</button>
                {toast && <div className='fixed top-20 right-4 flex justify-center items-center w-15 h-15 lg:right-8 bg-green-400 rounded-full z-60'><IoCheckmark className='text-black text-center w-8 h-8' /></div>}
                
              </div>
          </div>
        </div>

        {window.history.length > 1 && <button className='absolute top-5 m-auto p-1 border border-gray-200 rounded-full cursor-pointer hover:scale-105 duration-500' onClick={()=>navigate(-1)}><IoIosArrowBack className='pr-1 w-10 h-10 text-gray-400' /></button>}
      </div>
    </section>
  )
}

export default ProductPage