import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Header } from '../index'
import { TfiLocationPin } from 'react-icons/tfi'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import './contact.css'

const Contact = () => {
  // Header Title
  const { title, subtitle, description } = {
    title: 'visit us',
    subtitle: 'Where to find us',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.',
  }

  return (
    <section className="section container contact-container" id="contact">
      <Header title={title} subtitle={subtitle} description={description} />
      <div className="location grid">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          offset={150}
          className="location-laguna flex"
        >
          <div className="location-info-container">
            <h4>Laguna beach</h4>
            <div className="location-info location-address flex">
              <TfiLocationPin className="location-icon address-icon" />
              <p>3434 Via Lido Laguna Beach, CA 92663</p>
            </div>
            <div className="location-info location-telephone flex">
              <BsTelephone className="location-icon telephone-icon" />
              <p>(123) 456-789</p>
            </div>
            <div className="location-info location-mail flex">
              <AiOutlineMail className="location-icon mail-icon" />
              <p>booking@emerald.com</p>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOnce={true}
          offset={150}
          className="location-sanFrancisco flex"
        >
          <div className="location-info-container">
            <h4>San Francisco</h4>
            <div className="location-info location-address flex">
              <TfiLocationPin className="location-icon address-icon" />
              <p>140 Jackson St, San Francisco, CA 94111</p>
            </div>
            <div className="location-info location-telephone flex">
              <BsTelephone className="location-icon telephone-icon" />
              <p>(123) 415-983</p>
            </div>
            <div className="location-info location-mail flex">
              <AiOutlineMail className="location-icon mail-icon" />
              <p>booking@emerald.com</p>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}
export default Contact
