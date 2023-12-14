import React from 'react'
import { useCartContext } from '../../contexts/CartContext'
import { ItemCart } from '../Itemcart/ItemCart'

const CartItem = () => {
    const { cartList } = useCartContext();

    return (
        <div>
            {cartList.map(product => (
                <ItemCart key={product.id} product={product} />
            ))}
        </div>
    )
}

export default CartItem