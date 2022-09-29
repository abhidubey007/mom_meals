import React from 'react'
import { useState } from 'react'
import { Header, Meals, Cart } from './components'
import CartProvider from './store/CartProvider';


const App = () => {

    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true)
    }
    const hideCartHandler = () => {
        setCartIsShown(false)
    }

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    )
}

export default App