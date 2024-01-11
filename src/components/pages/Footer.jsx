import { NavLink } from "react-router-dom"
import face from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import pinterest from '../../assets/img/pinterest.png'
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
        <div className="social_media">
          <NavLink to='https://www.facebook.com/' target="_blank">
            <span><img src={face} alt="facebook" /></span>
          </NavLink>
          <NavLink to='https://www.instagram.com/' target="_blank">
            <span><img src={instagram} alt="instagram" /></span>
          </NavLink>
          <NavLink to='https://ar.pinterest.com/' target="_blank">
            <span><img src={pinterest} alt="pinterest" /></span>
          </NavLink>
        </div>
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
