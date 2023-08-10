import { formatPrice } from '../../../utils/functions'
import { useGlobalContext } from '../../../context/global_context'
import './menu_content.css'

const MenuContent = () => {
  const { filtered_menu: menu } = useGlobalContext()

  return (
    <section className="menu-content-container grid">
      {menu.map(({ id, name, ingredients, price, category }) => {
        return (
          <article key={id} className="menu-item">
            <header>
              <h4 className="menu-item-title">{name}</h4>
              <p className="menu-item-ingredients">{ingredients}</p>
            </header>
            <p className="menu-item-price">{formatPrice(price)}</p>
          </article>
        )
      })}
    </section>
  )
}
export default MenuContent
