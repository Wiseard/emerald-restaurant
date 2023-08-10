import logo from '../../assets/sidebar-logo.png'
import { socialLinks } from '../../utils/constants'
import './footer.css'

const Footer = () => {
  return (
    <section className="container section footer-container" id="footer">
      <div className="footer">
        <div className="footer-header flex">
          <img src={logo} alt="logo" />
          <h4>
            <span>&copy;</span>
            {new Date().getFullYear()} Emerald Blues. All right reserved.
          </h4>
          <p>
            We'd like to invite you on a culinary adventure, where you’ll
            explore undiscovered gourmet experiences.
          </p>
        </div>
        <div className="footer-info grid">
          <div className="footer-info-hours">
            <h4>hours</h4>
            <p>MONDAY to FRIDAY 12pm - 9.30pm</p>
            <p>SATURDAY / SUNDAY 11am - 10.30pm</p>
          </div>
          <div className="footer-info-social">
            <h4>stay in touch</h4>
            <div className="social-buttons flex">
              {socialLinks.map(({ icon, id }) => {
                return (
                  <button key={id} type="button" className="btn-footer-social">
                    {icon}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer
