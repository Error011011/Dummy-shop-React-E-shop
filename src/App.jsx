
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Cart from './pages/Cart'
import ProductPage from './pages/ProductPage'
import NotFound from './pages/NotFound'

function App() {



  return (
    <>
    {/* header */}
    <Header/>
    {/* main */}
    <main className='py-5 md:py-7 lg:py-9'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>

    </main>
    {/* footer */}
    <Footer/>     
    </>
  )
}

export default App
