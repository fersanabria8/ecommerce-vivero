import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../../styles/ItemDetail.css'


const ItemDetail = ({producto}) => {

  const [ contador, setContador] = useState(0)

  const { cartList, agregarProducto } = useContext(CartContext)

  function onAddCarrito(cant) {
    setContador(cant)
    agregarProducto({...producto, cantidad: cant})
  }

  // const { carrito, agregarAlCarrito } = useContext(CartContext)
  // console.log(carrito);

  // const [cantidad, setCantidad] = useState(1);

  // const handleRestar = () => {
  //   cantidad > 1 && setCantidad(cantidad - 1)
  // }

  // const handleSumar = () => {
  //   cantidad < producto.stock && setCantidad(cantidad + 1)
  // }


  return (
    <>
      <div className="card-detail">
        <div className="container-detail">
          <h3>{producto.nombre}</h3>
        </div>
        <div className="container-detail-img">
          <img src={producto.imagenURL} alt="fotoss"/>
        </div>
        <div className="container-detail-precio">
          <p>$ {producto.precio}</p>
        </div>
      </div>
      <ItemCount initial={1} onAddCarrito={onAddCarrito} />
    </>

//  <div className="container">
//     <div className="producto-detalle">
//         <img src={producto.imagenURL} alt={producto.nombre} />
//         <div>
//             <h3 className="titulo">{producto.nombre}</h3>
//             <p className="categoria">Categoría: {(producto.categoria)}</p>
//             <p className="precio">${producto.precio}</p>
//             <ItemCount
//               cantidad={cantidad}
//               handleSumar={handleSumar}
//               handleRestar={handleRestar}
//               handleAgregar={() => { agregarAlCarrito(producto, cantidad) }}
//             />
//         </div>
//     </div>
// </div> 
  )
}

export default ItemDetail