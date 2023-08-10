import { MenuButtons } from '../../index'
import Header from '../../Header/Header'
import MenuContent from '../MenuContent/MenuContent'
import './menu_container.css'

const MenuContainer = () => {
  // Header Title
  const { title, subtitle, description } = {
    title: "chef's recommended",
    subtitle: 'selected menus',
    description:
      'Picky eaters, adventurous eaters, whatever your taste, we have something for you.',
  }
  return (
    <section className="container section menu-container" id="menu">
      <Header title={title} subtitle={subtitle} description={description} />
      <MenuButtons />
      <MenuContent />
    </section>
  )
}
export default MenuContainer
