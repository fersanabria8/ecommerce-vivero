import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import '../../styles/Cart.css'
import { NavLink } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';

const Carrito = () => {

    const {cartList, vaciarCarrito, precioTotal } = useContext(CartContext)
    return (
      <div className="container-cart">
        {cartList.map(prod =>
        <div className='container-cart-nombre' key={prod.id}> 
          <p>{prod.nombre} x{prod.cantidad}</p>
          <div className="container-cart-img">
            <img src={prod.imagenURL}alt="fotos"/>
          <p>Precio unitario: ${prod.precio}</p>
          <p>Precio total: ${prod.precio * prod.cantidad}</p>
          </div>
        </div>)}
          <br />
        {
          cartList.length > 0?
          <>
          <button type='button' id='btnVaciar' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
          <h2><span>{`Precio Final: $ ${precioTotal()}`}</span></h2>
          <NavLink to='/checkout'> Finalizar compra </NavLink>
          </>
          :
          <h2>El carrito está vacío :/</h2>
        }

      </div>
      
    )

}

export default Carrito