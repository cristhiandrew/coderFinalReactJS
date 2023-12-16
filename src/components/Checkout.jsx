import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';

const Checkout = () => {

    
    const [orderId, setOrderId] = useState("");

    const { cart, totalPrice, cartEmpty } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const buy = (data) => {
        const order = {
            cliente: data,
            productos: cart,
            total: totalPrice()
        }
        console.log(order);

        const orderRef = collection(db, "order");

        addDoc(orderRef, order)
            .then((doc) => {
                setOrderId(doc.id);
                cartEmpty();
            })

    }

    if (orderId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {orderId}</p>
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(buy)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default Checkout