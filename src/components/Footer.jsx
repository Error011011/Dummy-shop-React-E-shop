import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className='py-5 md:py-9 bg-[#202020] text-sm text-white'>
        <div className="container">
            <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 place-content-center gap-5'>
                <div className='flex justify-center items-center'>
                    <ul className='flex flex-col gap-5 lg:gap-7 uppercase text-center'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/catalog'}>Catalog</Link></li>
                        <li><Link to={'/cart'}>Cart</Link></li>
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <ul className='flex flex-col gap-5 lg:gap-7 uppercase text-center'>
                        <li><Link to={'/#'}>Privacy policy</Link></li>
                        <li><Link to={'/#'}>Delivery</Link></li>
                        <li><Link to={'/#'}>Contacts</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer