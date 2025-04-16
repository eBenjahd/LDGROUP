import { useState } from "react";
import { useCart } from "../../../context/CartContext";  
import './Button.scss';

function Button({ product }) {
  const { addToCart } = useCart(); 
  const [quantity, setQuantity] = useState(0);

  const add = () => setQuantity(prev => prev + 1);
  const remove = () => {
    if (quantity > 0) setQuantity(prev => prev - 1);
  };

  const saveQuantity = () => {

    if (quantity <= 0) {
      alert("No puedes agregar un producto con cantidad 0");
      return;
    }


    const data = {
      id: product.id,
      name: product.name,
      price: product.price
    };

    addToCart(data, quantity); // ✅ Pasamos quantity como argumento separado
  };

  return (
    

    <div className="button-handler">
        <div onClick={saveQuantity}>
            <span className="add-product">Agregar producto</span>
        </div>
        <p>
            <span className='handler' onClick={remove}>-</span>
            <span>{quantity}</span>
            <span className='handler' onClick={add}>+</span>   
        </p>
    </div>
  );
}

export default Button;