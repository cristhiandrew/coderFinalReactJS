import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const [title, setTitle] = useState("Productos");

    const type = useParams().categoria;

    useEffect(() => {

      const productsRef = collection(db, "productos");
      const q = type ? query(productsRef, where("type", "==", type)) : productsRef;

      getDocs(q)
        .then((resp) => {

          setProducts(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [type])
    
    
  return (
    <div>
        <ItemList products={products} title={title} />
    </div>
  )
}

export default ItemListContainer