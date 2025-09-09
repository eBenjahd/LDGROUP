// Stylesheet
import './Navbar.scss'

// Components
import SearchSvg from "./components/SearchIcon"
import BagSvg from "../../assets/CartIcon"
import Hamburguer from './components/Hamburguer'
import Menu from './components/menuList/Menu'


// Hooks
import { useState, useEffect } from 'react'
import LDGroupLogo from './components/LdGroupLogo'
import CartPortal from '../cart/CartPortal'
import HamburguerPortal from '../hamburguer/HamburguerPortal'
import SearchPortal from '../search/SearchPortal'


function Navbar() {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openCart = () => {
    setIsCartOpen(true)
  }
  const closeCart = () => {
    setIsCartOpen(false)
  }

  const openMenu = () => {
    if (!isMenuOpen) { 
      setIsMenuOpen(true)
    }
  }

  const closeMenu = () => {
    if (isMenuOpen) {  // Solo cerrar el menú si está abierto
      setIsMenuOpen(false);
    }
  }


  useEffect(() => {
    // Bloquea scroll si hay algo abierto (carrito o búsqueda)
    if (isCartOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen, isSearchOpen]);

  return (
    <nav>

      <Menu />

      <div onClick={openMenu}>
        <Hamburguer />
        {isMenuOpen && <HamburguerPortal onClose={closeMenu}/>}
      </div>

      <p className='logo'>
        <LDGroupLogo /> 
      </p>
      
      
      
      <div className='icons'>

        <button onClick={openSearch}>
          <SearchSvg />
        </button>


        <div onClick={openCart}>
          <BagSvg itemQuantity={[]}/>
        </div>

        {isCartOpen && <CartPortal onClose={closeCart} />}
        {isSearchOpen && (
        <SearchPortal onClose={closeSearch} />
      )}
      </div>

      

    </nav>
  )
}

export default Navbar
