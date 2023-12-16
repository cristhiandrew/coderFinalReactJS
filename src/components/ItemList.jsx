import Item from "./Item";
import { toCapital } from "../helpers/toCapital";

const ItemList = ({ products, title }) => {
    return (
        <div className="container">
            <h2 className="main-title">{toCapital(title)}</h2>

            <div className="productos">
                {products.map((prod) => <Item products={prod} key={prod.id} />)}
            </div>
        </div>
    )
}

export default ItemList