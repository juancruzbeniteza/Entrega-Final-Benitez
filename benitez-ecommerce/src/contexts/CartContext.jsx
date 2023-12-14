import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
    const productIndex = cartList.findIndex((item) => item.id === product.id);

        if (productIndex !== -1) {
            const newCart = cartList.map((item) =>
                item.id === product.id
                ? { ...item, cant: item.cant + product.cant }
                : item
            )
            setCartList(newCart)
        } else {
            setCartList([...cartList, product])
        }
    }

    const emptyCart = () => {
        setCartList([])
    }

    const sumQuantities = () => {
        return cartList.reduce((total, { cant }) => total + cant, 0)
    }

    const totalPrice = () => {
        return cartList.reduce(
            (acum, { cant, price }) => acum + cant * price,
            0
        );
    }

    const deleteItems = (pid) => {
        setCartList(cartList.filter(product => product.id !== pid))
    }
    
    const deleteItem = (productId) => {
        const newCart = cartList.map((product) =>
            product.id === productId && product.cant > 0
            ? { ...product, cant: product.cant - 1 }
            : product
        )
        setCartList(newCart.filter((product) => product.cant > 0))
    }

    const addItem = (productId) => {
        const newCart = cartList.map((product) =>
            product.id === productId && product.cant > 0
            ? { ...product, cant: product.cant + 1 }
            : product
        )
        setCartList(newCart.filter((product) => product.cant > 0))
    }

    const contextValue = {
        cartList,
        addToCart,
        emptyCart,
        sumQuantities,
        totalPrice,
        deleteItems,
        addItem,
        deleteItem
    }

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}
