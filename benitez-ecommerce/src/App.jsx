import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx'
import Title from './components/Title/Title.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import CartContainer from './components/CartContainer/CartContainer.jsx'
import { CartContextProvider } from './contexts/CartContext.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './components/CartWidget/CartWidget.css'
import './components/NavBar/NavBar.css'


function App() {

    const titleApp= "Elegance"

    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Title
                    title={titleApp}
                />
                <Routes>
                    <Route path='/' element={<ItemListContainer saludo="" /> } />
                    <Route path='/category/:cid' element={<ItemListContainer saludo="" /> } />
                    <Route path='/detail/:pid' element={<ItemDetailContainer /> } />
                    <Route path='/cart' element={<CartContainer /> } />
                    <Route path='*' element={<Navigate to='/' /> } />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App
