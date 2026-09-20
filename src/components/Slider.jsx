import React from 'react'
import Product from './Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useQuery } from '@tanstack/react-query';
import { GetLastProducts } from '../api/ProductService';
import Loader from './Loader';

const Slider = () => {

  const {data, isLoading, isError, error } = useQuery({
    queryKey: ['lastProducts'],
    queryFn: GetLastProducts
  })
  
  if(isLoading) return <Loader/>
  if(isError) return <div className='py-5 md:py-7 lg:py-9 text-center'>Ошибка загрузки последних товаров...</div>

  
  return (
    <section className='py-5'>
      {/* <div className="container"> */}
        <h2 className='mb-5 md:mb-7 lg:mb-15 text-semibold uppercase text-2xl md:text-4xl lg:text-6xl text-center'>New products</h2>
        
        {/* swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false
          }}
          loop={true}
          breakpoints = {{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
        >
          {data?.products.map((product)=> {
            return <SwiperSlide><Product image={product.images[0]} title={product.title} price={product.price} id={product.id}/></SwiperSlide>
          })}

        </Swiper>
    </section>
  )
}

export default Slider