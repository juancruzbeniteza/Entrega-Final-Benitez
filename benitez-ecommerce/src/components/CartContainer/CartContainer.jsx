import React from 'react'
import CartItem from '../CartItem/CartItem'
import OrderForm from '../OrderForm/OrderForm'

import './CartContainer.css'

const CartContainer = () => {
    return (
        <>
        <CartItem />
        <div className='totalAndformClass'>
            <OrderForm />
        </div>
        </>
    )
}

export default CartContainer