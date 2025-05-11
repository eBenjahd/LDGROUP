import { createPortal } from "react-dom";
import { useMenu } from "../../context/MenuContext";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';

// style
import './HamburguerPortal.scss';

function HamburguerPortal({ onClose }) {

// Using the useMenu hook to get the links from the context
  const { links } = useMenu(); // The links are passed as props to the component

  
// Using the useState hook to manage the state of the menu
  const [isActive, setIsActive] = useState(false);

// Creating a timeout to delay the activation of the menu  
  useEffect (()=> {
    const timeoutId = setTimeout(() => {
        setIsActive(true);
    },10)

    return () => clearTimeout(timeoutId)
  },[])

// Function to close the menu and set the isActive state to false
  const handleClose = () => {
    setIsActive(false);
    setTimeout(() => {
        onClose()
    },300)
  }

  return createPortal(

    // Creating a portal to render the hamburguer menu

    // The div with the class hamburguer is the container for the menu
    <div className={`hamburguer ${isActive ? 'active' : '' }`}>
      <button className="close-btn" onClick={handleClose} aria-label="Cerrar menú">
        <span>x</span> 
        <span>Cerrar</span>
      </button>

    {/* Mapping the array of links to display the menu  */}
      <ul className="cross">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url} onClick={handleClose}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>,
    document.querySelector('#hamburguer') // Se renderiza el portal en el contenedor con este id
  );
}

export default HamburguerPortal;