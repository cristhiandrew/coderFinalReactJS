import React from 'react'

const ItemCount = ( {stock, handleRestar, handleSumar, handleAdd} ) => {    

  return (
    <div>
        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{stock}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount