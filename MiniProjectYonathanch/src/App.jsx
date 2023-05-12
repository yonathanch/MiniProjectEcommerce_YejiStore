import { useState } from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Product from './Components/Product/Product'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
// import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
 

  return (
    <>
    <Router>
    <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    <Footer/>
    </Router>



    </>
  )
}

export default App
