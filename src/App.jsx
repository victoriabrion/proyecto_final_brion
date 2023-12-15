import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { createContext } from 'react'
import { CartProvider } from './context/CartContext'



export const CartContext = createContext()

function App() {

  const [cart, setCart] = useState ([]);
 
  return (
    <>
      <div className="body">
      <CartContext.Provider value= {{cart, setCart}}>
          <BrowserRouter>
            <CartProvider>
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Welcome!'} />} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting = {'You are in: '} />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element= {<Checkout/>} />
              </Routes>
            </CartProvider>
          </BrowserRouter>
        </CartContext.Provider>
      </div>

    </>
  )
}

export default App