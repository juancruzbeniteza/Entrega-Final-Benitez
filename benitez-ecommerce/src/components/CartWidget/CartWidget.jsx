import { BsFillCartCheckFill } from 'react-icons/bs'

import { useCartContext } from '../../contexts/CartContext'

import './CartWidget.css'

export const CartWidget = () => {

    const {sumQuantities} = useCartContext()
    return (
        <div className='cart'>
            <strong className='strong1'> {sumQuantities()}</strong>
            <BsFillCartCheckFill />
        </div>
    )
}
