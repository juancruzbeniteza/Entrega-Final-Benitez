import { Link } from "react-router-dom"
import { useCartContext } from "../../contexts/CartContext"
import './ItemCart.css'

export const ItemCart = ( {product} ) => {
    const { addItem, deleteItem, deleteItems } = useCartContext()
    return(
        <div key={product.id} className="divCart">
            <Link to={`/detail/${product.id}`}>
                <img className="imgCart" src={product.imageUrl} alt= {product.name} />
            </Link>
            <strong>
                {product.name}
            </strong>
            <div>
                <button 
                    className="my-custom-btn pt-3 pb-3"
                    onClick= {() => addItem(product.id)}
                >
                    +
                </button>
                Cantidad: <strong>{product.cant}</strong>
                <button 
                    className="my-custom-btn pt-3 pb-3"
                    onClick= {() => deleteItem(product.id)}
                >
                    -
                </button>
            </div>
            <div>
                Precio: <strong>${product.price*product.cant}</strong>
            </div>
            <button 
                className="btn btn-danger"
                onClick= { ()=> deleteItems(product.id) }
            >
                x
            </button>
        </div>
    )
}