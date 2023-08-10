import { Link, animateScroll as scroll } from 'react-scroll'
import { menuLinks, socialLinks } from '../../utils/constants'
import { AiOutlineClose } from 'react-icons/ai'
import sidebarLogo from '../../assets/sidebar-logo.png'
import './sidebar.css'
import { useNavigationContext } from '../../context/navigation_context'

const Sidebar = () => {
  const { openSidebarMenu, closeSidebar } = useNavigationContext()
  return (
    <>
      <div
        className={`sidebar-modal ${
          openSidebarMenu ? 'show-sidebar-modal' : ''
        }`}
        onClick={closeSidebar}
      ></div>
      <aside
        className={`sidebar-container ${openSidebarMenu ? 'show-sidebar' : ''}`}
      >
        <button type="button" className="btn-close-sidebar">
          <AiOutlineClose className="close-icon" onClick={closeSidebar} />
        </button>
        <div className="sidebar-logo">
          <div className="underline"></div>
          <h1>emerald blues</h1>
          <div className="underline"></div>
        </div>
        <ul className="sidebar-links">
          {menuLinks.map(({ id, name, url }) => {
            return (
              <li key={id} className="link">
                <Link
                  activeClass="active"
                  to={url}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeSidebar}
                >
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="sidebar-logo-container">
          <img src={sidebarLogo} alt="logo" />
        </div>
        <ul className="sidebar-links">
          {socialLinks.map(({ id, name }) => {
            return (
              <li key={id} className="link">
                <a href="/">{name}</a>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}
export default Sidebar
