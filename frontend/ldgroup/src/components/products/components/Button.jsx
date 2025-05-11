import { useState } from "react";
import { useCart } from "../../../context/CartContext";  
import './Button.scss';
import BagIcon from "../../../assets/BagIcon";

function Button({ product }) {
  const { addToCart } = useCart(); 
  const [quantity, setQuantity] = useState(0);

  const add = () => setQuantity(prev => prev + 1);
  const remove = () => {
    if (quantity > 0) setQuantity(prev => prev - 1);
  };

  const saveQuantity = () => {

    // ✅ Validamos que la cantidad sea mayor a 0
    if (quantity <= 0) {
      alert("No puedes agregar un producto con cantidad 0");
      return;
    }

    // ✅ Aquí pasamos la cantidad como argumento separados y lo guardamos en el carritoContext
    const data = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }; 

    addToCart(data, quantity); // ✅ Pasamos quantity como argumento separado
  };

  return (
    

    <div className="button-handler">
        <div onClick={saveQuantity}>
            <span className="add-product"><BagIcon width={14} height={14} color='white'/></span>
        </div>
        <div className="adder">
            <span className='handler' onClick={remove}>-</span>
            <span>{quantity}</span>
            <span className='handler' onClick={add}>+</span>   
        </div>
    </div>
  );
}

export default Button;