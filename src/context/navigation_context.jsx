import React, { useContext, useEffect, useState } from 'react'

const NavigationContext = React.createContext()

export const NavigationProvider = ({ children }) => {
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false)

  function openSidebar() {
    setOpenSidebarMenu(true)
  }
  function closeSidebar() {
    setOpenSidebarMenu(false)
  }

  useEffect(() => {
    if (openSidebarMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [openSidebarMenu])

  return (
    <NavigationContext.Provider
      value={{
        openSidebarMenu,
        setOpenSidebarMenu,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigationContext = () => {
  return useContext(NavigationContext)
}
