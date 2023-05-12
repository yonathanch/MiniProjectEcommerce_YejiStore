import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartBtn = () => {
    
    return (
        <>
            <Link to="/cart" className="btn btn-dark ms-2" >
                <span className="me-1">
                    <FontAwesomeIcon icon={faCartShopping} />
                </span> Cart (0)
            </Link>
        </>
    )
}

export default CartBtn