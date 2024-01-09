import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    const state = useSelector((state)=> state.addItem)

    return (
        <>
            <Link to="/cart" className="btn btn-dark ms-2" >
                <span className="me-1">
                    <FontAwesomeIcon icon={faCartShopping} />
                </span> Cart ({state.length})
            </Link>
        </>
    )
}

export default CartBtn