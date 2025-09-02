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


function Navbar() {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    console.log('Abriendo carrito...')
    setIsCartOpen(true)
  }
  const closeCart = () => {
    setIsCartOpen(false)
  }

  const openMenu = () => {
    if (!isMenuOpen) { 
      console.log('Abriendo menu...')
      setIsMenuOpen(true)
    }
  }

  const closeMenu = () => {
    if (isMenuOpen) {  // Solo cerrar el menú si está abierto
      console.log('Cerrando menu...');
      setIsMenuOpen(false);
    }
  }


  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Limpieza del efecto cuando el componente se desmonte o el carrito se cierre
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [isCartOpen]);

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

        <SearchSvg />

        <div onClick={openCart}>
          <BagSvg itemQuantity={[]}/>
        </div>

        {isCartOpen && <CartPortal onClose={closeCart} />}
      </div>

      

    </nav>
  )
}

export default Navbar
