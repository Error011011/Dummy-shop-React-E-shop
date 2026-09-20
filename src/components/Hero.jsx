import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <section className='py-5'>
        <div className="container">
            <div className='relative p-5 flex justify-center items-center w-full h-[400px] md:h-[600px] xl:h-[900px] rounded-4xl bg-[#2C3E50] text-center'>
                <div>
                    <h1 className='text-white uppercase font-bold text-3xl md:text-5xl lg:text-7xl xl:text-9xl tracking-widest hover:scale-110 duration-900'>All you need</h1>
                </div>
                <button className='absolute bottom-5 px-5 py-3 border-2 rounded-full uppercase text-white hover:bg-white hover:text-black duration-300'><Link to={'/catalog'}>Catalog</Link></button>
            </div>
        </div>
    </section>
  )
}

export default Hero