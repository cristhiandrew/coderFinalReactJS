import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";
import "../assets/styles/itemDetails.css";


const ItemDetail = ({ item }) => {

  const { cart, addCart} = useContext(CartContext);
  console.log(cart)

  const [stock, setStock] = useState(1);

  const handleRestar = () => {
    stock > 1 && setStock(stock - 1)
  }

  const handleSumar = () => {
    stock < item.stock && setStock(stock + 1)
  }

  return (
    <div className="detailsItem">
      <div className="containerLeft">
        <img src={item.imagen} alt={item.title} />
        <div>
          <div className="containerRight">
          <h3 className="title">{item.title}</h3>
          <p className="parrafo">{item.description}</p>
          <p className="precio">${item.price}</p>
          </div>
          <ItemCount
            stock={stock}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAdd={() => { addCart(item, stock)}}
          />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail