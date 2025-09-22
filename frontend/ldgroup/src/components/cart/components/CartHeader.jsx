import CloseButton from "../../close-button/CloseButton"

function CartHeader({ onClose }) {
  return (
    <div className='cart-header'>
        <h2>Tu carrito  🛒</h2>
        <CloseButton onClose={onClose}/>
    </div>
  )
}

export default CartHeader
