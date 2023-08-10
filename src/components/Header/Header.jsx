import './header.css'

const Header = ({ title, subtitle, description }) => {
  return (
    <section className="header-container">
      <div className="header-title">
        <div className="header-title-underline"></div>
        <h2>{title}</h2>
        <div className="header-title-underline"></div>
      </div>
      <div className="header-subtitle">
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <div className="header-bottom-underline"></div>
      </div>
    </section>
  )
}
export default Header
