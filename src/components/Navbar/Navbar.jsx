import { menuLinks } from '../../utils/constants'
import { Link, animateScroll as scroll } from 'react-scroll'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import './navbar.css'
import { useNavigationContext } from '../../context/navigation_context'

const Navbar = () => {
  const { openSidebarMenu, openSidebar } = useNavigationContext()

  return (
    <nav className="navigation-container">
      <div className="logo">
        <h1 className="logo-title">Emerald Blues</h1>
        <h2 className="logo-subtitle">Fine Dining</h2>
      </div>
      <ul className="navigation-links">
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
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
      <button type="button" className="btn-menu" onClick={openSidebar}>
        <HiOutlineMenuAlt3 className="menu-icon" />
      </button>
    </nav>
  )
}
export default Navbar
