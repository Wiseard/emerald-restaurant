import { menuCategories } from '../../../utils/constants'
import { nanoid } from 'nanoid'
import { useGlobalContext } from '../../../context/global_context'
import './menu_buttons.css'

const MenuTitle = () => {
  const { filterMenu, category: menuCategory } = useGlobalContext()

  return (
    <section className="menu-buttons-container">
      <div className="menu-buttons">
        {menuCategories.map((category) => {
          return (
            <button
              className={`btn-category ${
                menuCategory === category ? 'btn-category-active' : ''
              }`}
              type="button"
              key={nanoid()}
              onClick={() => filterMenu(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </section>
  )
}
export default MenuTitle
