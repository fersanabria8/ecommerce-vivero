import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Navbar.css'
import { CartContext } from '../../context/CartContext';

export const Navbar = () => {

  const { cantidadTotal } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  console.log(cantidadTotal)
  return (
    <nav>
      <NavLink to='/' className='tittle'>LOGO
      </NavLink>
      
      <div className='menu' onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)} >
        <li>
          <NavLink to='/'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/about'>Nosotros</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Plantas</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contacto</NavLink>
        </li>
        <li>
          <NavLink to='/carrito'>Carrito <span>{cantidadTotal}</span> </NavLink>
        </li>
      </ul>
    </nav>
  )
}
