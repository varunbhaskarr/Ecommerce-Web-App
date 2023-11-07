import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
import ItemsPage from './pages/ItemsPage'
import SingleProduct from "./pages/SingleProducts"
import Cart from './pages/Cart'
import Navigation from './components/Navigation'
import { CartContextt } from './CartContextt'
import { useEffect, useState } from 'react'












const App = () => {
    const [cart, setCart] = useState({})

    useEffect(() => {
        const cart = window.localStorage.getItem('cart')
        setCart(JSON.parse(cart))




    }, [])

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])








    return (

        <>








            <Router>
                <CartContextt.Provider value={{ cart, setCart }}>

                    <Navigation />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        {/* <Route path="/about" element={<About/>} /> */}
                        <Route path='/items' element={<ItemsPage />} />
                        <Route path='/items/:_id' element={<SingleProduct />} />


                        <Route path='/cart' element={<Cart />} />






                    </Routes>
                </CartContextt.Provider>




            </Router>












        </>
    )

}

export default App;