import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Login from '../Button/Login/Login'
import Input from '../../Elements/Input/Input'
import Register from '../Button/Register/Register'
import CartBtn from '../Button/CartBtn.jsx/CartBtn'

const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark-subtle" id='navbar'>
                <div className="container-fluid py-3">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link text-black">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link text-black">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link text-black">About</Link>
                            </li>
                        </ul>
                        <Link to="/" className="navbar-brand mx-auto fw-bold" >YEJI STORE</Link>
                        <Login />
                        <Register />
                        <CartBtn />
                    </div>
                     {/* <form className="d-flex" role="search">
                            <Input
                                type={'search'}
                                classInput={'form-control me-2'}
                                placeholder={'Search'}
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form> */}
                  

                  
                </div>
            </nav>
          

        </>
    )
}

export default Header