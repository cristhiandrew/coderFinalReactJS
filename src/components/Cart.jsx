import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, totalPrice, cartEmpty } = useContext(CartContext);

    const handleEmpty = () => {
           cartEmpty();
    }
  return (
    <div className='carrito'>
        <h1 className='main-title'>Carrito</h1>

        {
            cart.map((prod) => (
                <div className='carrito-producto' key={prod.id}>
                    <br />
                    <img className='carrito-img' src={prod.imagen} alt="" />
                    <h3>{prod.title}</h3>
                    <p>Precio unidad: ${prod.price}</p>
                    <p>Precio total: ${prod.price * prod.stock}</p>
                    <p>Cantidad:{prod.stock}</p>
                    <br />
                </div>
            ))
        }

        {  
            cart.length > 0 ?
            <div className='carrito-acciones'>
                <h2 className='total-precio'>Precio total: ${totalPrice()}</h2>
                <button onClick={handleEmpty} className='carrito-vaciar'>Vaciar</button>
                <Link to="/checkout" className='endbuy'>Finalizar compra</Link>
            </div> :
            <h2>El carrito está vacío :(</h2>
        }
            
    </div>
  )
}

export default Cart