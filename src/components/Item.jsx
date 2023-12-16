import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/styles/cardItems.css";

const Item = ({ products }) => {
  return (
    <div className="cardItem">
      <img src={products.imagen} alt={products.title} />
      <div>
        <h4 className='title'>{products.title}</h4>
        <p className='precio'>Precio: ${products.price}</p>
        <Link className="buttomdos" to={`/item/${products.id}`}>Ver más</Link>
      </div>
    </div>
  )
}

export default Item