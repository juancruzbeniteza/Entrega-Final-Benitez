import { useCounter } from "../Hooks/useCounter"

import './ItemCounter.css'

export const ItemCounter = ({initial=1, stock= 30, onAdd}) => {
    const {count, handleResta, handleSuma} = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(count)
    }
    
    return (
        <div className="justify-content-center botonesGrilla">
            <div className="d-flex justify-content-center">
                <button className="botones btn btn-dark" onClick={handleResta}>-</button>
                <p className="botones">
                    <strong> {count} </strong>
                </p>
                <button className="botones btn btn-dark" onClick={handleSuma}>+</button>
            </div>
            <div className="">
                <button className="botones btn btn-dark" onClick={handleOnAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}
