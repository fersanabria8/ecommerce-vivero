import './App.css'
import { Navbar , Home, About, Contact, Footer, NotFound404} from './components/pages'
import { Route, Routes  } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import Cart from './components/Cart/Cart'
import { BrowserRouter } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout'


function App() {


  return ( 
    <>
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/products" element={ <ItemListContainer />} />
        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
        <Route path="/products/:categoria" element={ <ItemListContainer />} />
        {/* <Route path='/detalle/:id' element={<ItemDetailContainer/>}  /> */}
        {/* <Route path='/detalle/:id' element={<ItemDetailContainer />} /> */}
        <Route path="/contact" element={ <Contact />} />
        <Route path='*' element={ <NotFound404/>} />
        <Route path='/carrito' element={<Carrito/>} />
        {/* <Route path='/cart' element={<Cart/>} /> */}
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
   </>
  )
}

export default App
