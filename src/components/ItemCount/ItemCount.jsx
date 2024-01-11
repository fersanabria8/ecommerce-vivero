import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/ItemCount.css'


function ItemCount ({initial, onAddCarrito})  {
  const [contador, setContador] = useState(1)
  const [condicionBoton, setCondicionBoton] = useState(false)

  function suma () { 
  
    setContador(contador + 1)
  }

  function resta () {
    if (contador > initial) 
      setContador(contador - 1)
  }

function handleClick() {
    onAddCarrito(contador)
    setContador(initial) 
    setCondicionBoton(true)
  }
  

  return (
    <div>
      <section className="contador-container">
        <center>
        <button type='button' id="resta" onClick={resta}>-</button>
        <label>{contador}</label>
        <button type='button' id='suma' onClick={suma}>+</button>
        </center>
            { condicionBoton && 
            <>
  
              <NavLink to='/products'>
                <button type='button' id='btnSeguirComprando'>Seguir Comprando</button>
              </NavLink>
              <NavLink to='/carrito'>
                <button type='button' id='btnfinCompra'>Finalizar Compra</button>
              </NavLink>
            </>
            } 
            { !condicionBoton && <button id='botonAddItemCount' onClick={handleClick}>Agregar al Carrito</button>}
      </section>
    </div>
  )
}

export default ItemCount


// import React from 'react'

// const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

//   return (
//     <div>

//         <div className="item-count">
//             <button onClick={handleRestar}>-</button>
//             <p>{cantidad}</p>
//             <button onClick={handleSumar}>+</button>
//         </div>
//         <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
//     </div>
//   )
// }

// export default ItemCount