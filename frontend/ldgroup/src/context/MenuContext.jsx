import { createContext, useContext } from "react"

const MenuContext = createContext()

function MenuProvider({children, links=[]}) {

    const safeLinks = Array.isArray(links) ? links : [links]


  return (
    <MenuContext.Provider value={{links: safeLinks}}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider

export function useMenu() {
    return useContext(MenuContext)
}