import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, totalPrice, cartEmpty } = useContext(CartContext);

    const handleEmpty = () => {
           cartEmpty();
    }
  return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>

        {
            cart.map((prod) => (
                <div key={prod.id}>
                    <br />
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
            <>
                <h2>Precio total: ${totalPrice()}</h2>
                <button onClick={handleEmpty} className='vaciar'>Vaciar</button>
                <Link to="/checkout" className='endbuy'>Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío :(</h2>
        }
            
    </div>
  )
}

export default Cart