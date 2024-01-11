// import red from '../img/hero-cervezas.jpg';
// import red2 from '../img/hero-cervezas-2.jpg';
// import red3 from '../img/hero-cervezas-3.jpg';
// import red4 from '../img/hero-cervezas-4.jpg';
import hero from '../../assets/img/hero.jpg'
import hero3 from '../../assets/img/hero-3.jpg'
import hero4 from '../../assets/img/hero-4.jpg'
import hero5 from '../../assets/img/hero-5.jpg'
import hero6 from '../../assets/img/hero-6.jpg'
import hero7 from '../../assets/img/hero-7.jpg'
import maceta1 from '../../assets/img/maceta-1.jpg'
import maceta2 from '../../assets/img/maceta-2.jpg'
import maceta3 from '../../assets/img/maceta-3.jpg'
import maceta4 from '../../assets/img/maceta-4.jpg'
import maceta5 from '../../assets/img/maceta-5.jpg'
import maceta6 from '../../assets/img/maceta-6.jpg'
import '../../styles/Section.css'

export const Section = () => {
  return (
    <div className='section_container'>
      <div className='tittle_1'>Nosotros</div>
      <div className='section_img'>
        <img src={hero} alt="cerveza-red" />
        <img src={hero3} alt="cerveza-red" />
        <img src={hero4} alt="cerveza-red" />
        <img src={hero5} alt="cerveza-red" />
        <img src={hero6} alt="cerveza-red" />
        <img src={hero7} alt="cerveza-red" />
      </div>
      <hr />
      <div className='tittle_2'>Plantas Favoritas</div>
      <div className='section_plants'>
        <div className='section_box'>
          <img src={maceta1} alt="cerveza-red" />
          <h2>asdasd</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod quasi corporis ex similique aperiam facilis suscipit expedita temporibus nulla.</p>
        </div>
        <div className='section_box'>
          <img src={maceta2} alt="cerveza-red" />
          <h2>asdasd</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod quasi corporis ex similique aperiam facilis suscipit expedita temporibus nulla.</p>
        </div>
        <div className='section_box'>
          <img src={maceta3} alt="cerveza-red" />
          <h2>asdasd</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod quasi corporis ex similique aperiam facilis suscipit expedita temporibus nulla.</p>
        </div>
        <div className='section_box'>
          <img src={maceta4} alt="cerveza-red" />
          <h2>asdasd</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod quasi corporis ex similique aperiam facilis suscipit expedita temporibus nulla.</p>
        </div>
        <div className='section_box'>
          <img src={maceta5} alt="cerveza-red" />
          <h2>asdasd</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod quasi corporis ex similique aperiam facilis suscipit expedita temporibus nulla.</p>
        </div>
        <div className='section_box'>
          <img src={maceta6} alt="cerveza-red" />
          <h2>asdasd</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod quasi corporis ex similique aperiam facilis suscipit expedita temporibus nulla.</p>
        </div>
      </div>
    </div>
  )
}
