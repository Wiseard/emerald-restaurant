import Form from '../Form/Form'
import heroBanner from '../../../assets/hero-banner.jpeg'
import './hero.css'

const Hero = () => {
  return (
    <section className="section hero-container">
      <div className="hero-banner grid animate__animated animate__fadeIn">
        <div className="hero-image-container">
          <img src={heroBanner} alt="banner" className="hero-banner-image" />
        </div>
        <div className="hero-reservation-container">
          <Form />
        </div>
      </div>
    </section>
  )
}
export default Hero
