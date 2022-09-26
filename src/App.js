import React from 'react'
import { useState } from 'react'
import { Header, Meals, Cart } from './components'


const App = () => {

    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true)
    }
    const hideCartHandler = () => {
        setCartIsShown(false)
    }

    return (
        <>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </>
    )
}

export default App