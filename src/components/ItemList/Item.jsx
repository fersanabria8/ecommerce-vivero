import React from 'react'
import { NavLink } from "react-router-dom"
import '../../styles/Item.css'


function Item ({itemPlanta}) {
return (
  <div className="card">
      <div className="item card-header card-body">
        <h2 className="item-nombre">{itemPlanta.nombre}</h2>
        <img src={itemPlanta.imagenURL} alt="" />
        <NavLink to={`/detalle/${itemPlanta.id}`}>
        <button type="button" className="añadir-carrito-btn"><i className="fas fa-shopping-cart"></i>Añadir al carrito
        </button>
        </NavLink>
        <h2>${itemPlanta.precio}</h2>
        <h2>Stock: {itemPlanta.stock}</h2>
      {/* </Link> */}
    </div>
  </div>

  )
}

export default Item





















// import '../../styles/Item.css'


// // import { useSelector } from 'react-redux'

// export const Item = ({itemPlanta}) => {



//   return (
//     <div className='card'>
//       <div className="card__body">
//         <img src={itemPlanta.imagenURL} alt="planta" className='card__image' />
//         <h2 className='card__title'>{itemPlanta.nombre}</h2>
//         <p className='card_description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, iste!</p>
//         <p>$ {itemPlanta.precio.toFixed(2)}</p>
//         <p>{itemPlanta.stock}</p>
//       </div>
//       <button>Agregar al carrito</button>
//     </div>
//   )
// }
