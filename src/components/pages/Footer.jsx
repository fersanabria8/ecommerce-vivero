import { NavLink } from "react-router-dom"
import '../../styles/Footer.css'


export const Footer = () => {
  return (
    // <div className='footer-container'>
    //   <div className="footer-wrapper">
    //     <div className="footer-list">
    //       <li>facebook</li>
    //       <li>twitter</li>
    //       <li>pinterest</li>
    //       <li>instagram</li>
    //     </div>
    //     <div className="footer-nav">
    //       <ul>
    //         <li><Link to='/'>home</Link></li>
    //         <li><Link to='/aboutus'>about us</Link></li>
    //         <li><Link to='/menu'>menu</Link></li>
    //         <li><Link to='/contact'>contact</Link></li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className='footer_container'>
      <div className='footer_tittle'>
        <h3>Footer</h3>
      </div>
      <div className='footer_column'>
        <ul className="footer-nav">
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
      </div>
    </div>
  )
}
