const menu_reducer = (state, action) => {
  if (action.type === 'FILTER_MENU') {
    const { category } = action.payload
    const filteredMenu = state.menu.filter((item) => item.category === category)
    return { ...state, filtered_menu: filteredMenu }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default menu_reducer
