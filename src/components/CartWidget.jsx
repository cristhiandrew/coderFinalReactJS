import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cart from "../assets/img/Cart.png"
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const { stockInCart } = useContext(CartContext);

    return(
        <div className="containerLenght">
            <Link to="/carrito"><img src={cart} alt="cart" /></Link>
            <span className="cantCart">{stockInCart()}</span>
        </div>
    )
}

export default CartWidget;