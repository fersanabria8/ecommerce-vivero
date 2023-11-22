import { useState } from 'react'
import './App.css'
import { Navbar , Home, About, Products, Contact} from './components/pages'
import { Route, Routes  } from 'react-router-dom'
import { Footer } from './components/pages/Footer'

function App() {
  const [count, setCount] = useState(0)
  return ( 
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/products" element={ <Products />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
      <Footer />
   </>

  )
}

export default App
