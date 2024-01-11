import hero5 from '../../assets/img/hero-5.jpg'
import hero7 from '../../assets/img/hero-7.jpg'
// import hero from '../img/hero-cervezas-grupo.jpg'
// import hero2 from '../img/hero-cervezas-grupo-2.jpg'
import '../../styles/About.css'

export const About = () => {
  return (
    <div className='about_container'>
      <div className="about1">
        <div className='about_left'>
          <img src={hero5} alt="hero5" />
        </div>
        <div className='about_right'>
          <h3>Nosotras</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iusto eius veniam earum eveniet? Perferendis velit eveniet totam, non temporibus voluptate expedita quo nam recusandae maxime amet nesciunt vel aut.</p>
        </div>
      </div>
      
      <div className="about2">
        <div className='about_left'>
          <h3>Nosotras</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iusto eius veniam earum eveniet? Perferendis velit eveniet totam, non temporibus voluptate expedita quo nam recusandae maxime amet nesciunt vel aut.</p>
        </div>
        <div className='about_right'>
          <img src={hero7} alt="hero7" />
        </div>
      </div>
    </div>
  )
}
