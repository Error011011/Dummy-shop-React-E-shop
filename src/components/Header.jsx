import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router';


const Header = () => {
  return (
    <header className='py-5 sticky top-0 z-50 bg-white'>
        <div className="container">
            <div className='flex justify-between'>
                <div className='logo text-lg md:text-2xl lg:text-4xl cursor-pointer'><Link to={'/'}>DummyShop</Link></div>
                <div><Link to={'/cart'}><FaShoppingCart className='w-7 h-7 cursor-pointer'/></Link></div>
            </div>
        </div>
    </header>
  )
}

export default Header