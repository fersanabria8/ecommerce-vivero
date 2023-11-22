import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Navbar.css'

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

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
          <NavLink to='/products'>Ropa</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contacto</NavLink>
        </li>
      </ul>
    </nav>
  )
}
