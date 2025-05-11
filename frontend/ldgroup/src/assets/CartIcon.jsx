// SASS
import './CartIcon.scss'

// Context
import { useCart } from '../context/CartContext'

function CartIcon({ width = 17, height = 17, color = "black"}) {

  const { cartItems } = useCart();  // Obtenemos el carrito desde el contexto

  // Contamos la cantidad total de productos (sumando todas las cantidades)
  // const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalItem = cartItems.length

  return (

    <div>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>

      <span className="item-count">{totalItem}</span>
      {console.log(totalItem)}
    </div>
    
  )
}

export default CartIcon
