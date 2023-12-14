import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from '../../contexts/CartContext'

import './OrderForm.css'

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        email2: ''
    });

    const [isId, setIsId] = useState("");
    const { cartList, emptyCart, totalPrice } = useCartContext();

    const handleFinishOrder = (evt) => {
        evt.preventDefault()
        const order = {
            buyer: formData,
            items: cartList.map(({ id, price, cant, name }) => ({ id, price, name, cant })),
            total: totalPrice()
        };

        if (formData.email !== formData.email2) {
            alert('Los correos electrónicos deben ser iguales')
            return;
        }

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
        .then(({ id }) => setIsId(id))
        .catch(err => console.log(err))
        .finally(() => {
            setFormData({
                name: '',
                phone: '',
                email: '',
                email2: ''
            })
            emptyCart()
        })
    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const copyText = () => {
        const textToCopy = isId
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('ID copiado al portapapeles')
        }).catch((err) => {
            console.error('Error al copiar al portapapeles:', err)
        })
    }

    const renderEmptyCart = () => {
        return (
            <div>
                {isId ? (
                    <div>
                        <h2>
                            El id de la compra es: <br />
                            <button className='btn btn-outline-dark mt-2' onClick={copyText}>
                                <h1>{isId}</h1>
                            </button>
                        </h2>
                        <div className='tyBuyClass'>
                            <Link to={'/'}>
                                <button className='my-custom-btn pt-3 pb-3'> Volver</button>
                            </Link>
                            <img className='tyBuy' alt="" />
                        </div>
                    </div>
                ) : (
                    <div className='emptyCartClass'>
                        <h3>
                            Carrito Vacio
                        </h3>
                        <Link to='/'>
                            <button className="my-custom-btn pt-3 pb-3">
                                Volver
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        )
    }

    const renderNotEmptyCart = () => {
        return (
            <div className='renderNotEmptyCartClass'>
                <div>
                    <h3>Total: $ {totalPrice()}</h3>
                    <div className='buttonClass'>
                        <Link to='/'>
                            <button className="my-custom-btn pt-3 pb-3">
                                Seguir comprando
                            </button>
                        </Link>
                        <button className="my-custom-btn pt-3 pb-3" onClick={emptyCart}>
                            Vaciar carrito
                        </button>
                    </div>
                </div>
                <div className='handleFinishOrderClass'>
                    <form onSubmit={handleFinishOrder}>
                        <div className='labelClass'>
                            <label>Ingrese su Nombre y Apellido: </label>
                            <input type="text" name='name' required onChange={handleOnChange} value={formData.name} />
                        </div>
                        <div className='labelClass'>
                            <label>Ingrese su Celular: </label>
                            <input type="text" name='phone' pattern="[0-9]+" required onChange={handleOnChange} value={formData.phone} />
                        </div>
                        <div className='labelClass'>
                            <label>Ingrese su Email: </label>
                            <input type="email" name='email' required onChange={handleOnChange} value={formData.email} />
                        </div>
                        <div className='labelClass'>
                            <label>Reingresar su Email: </label>
                            <input type="email" name='email2' required onChange={handleOnChange} value={formData.email2} />
                        </div>
                        <button className='btn btn-success pt-3 pb-3'>
                            Terminar compra 
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div>
            {cartList.length > 0 ? renderNotEmptyCart() : renderEmptyCart()}
        </div>
    )
}

export default OrderForm