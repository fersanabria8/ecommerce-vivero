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
import '../../styles/Section.css'

export const Section = () => {
  return (
    <div className='section_container'>
      <div className='tittle'>Cervezas Favoritas</div>
      <div className='cervezas_populares'>
        <img src={hero} alt="cerveza-red" />
        <img src={hero3} alt="cerveza-red" />
        <img src={hero4} alt="cerveza-red" />
        <img src={hero5} alt="cerveza-red" />
        <img src={hero6} alt="cerveza-red" />
        <img src={hero7} alt="cerveza-red" />
      </div>
    </div>
  )
}
