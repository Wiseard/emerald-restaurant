import React, { useContext, useEffect, useReducer, useState } from 'react'
import reducer from '../reducers/global_reducer'
import { menu, reviews } from '../utils/constants'

const GlobalContext = React.createContext()

const initialState = {
  menu: menu,
  filtered_menu: [],
  reviews: reviews,
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [category, setCategory] = useState('starters')

  function filterMenu(category) {
    dispatch({ type: 'FILTER_MENU', payload: { category } })
    setCategory(category)
  }

  useEffect(() => {
    filterMenu(category)
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        filterMenu,
        category,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
