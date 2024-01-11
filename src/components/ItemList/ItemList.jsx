import React from 'react'
import Item from "./Item"
import '../../styles/Item.css'

export const ItemList = ({productoplantas}) => {


  return (
    <div className='productoplantas__container'>
      { productoplantas.map(prod => 
        <Item 
          key={prod.id}
          itemPlanta={prod}
         />)}
    </div>
  )
}
