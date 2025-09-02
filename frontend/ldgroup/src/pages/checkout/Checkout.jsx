import { useCart } from "../../context/CartContext"
import { z } from "zod"
import axios from "axios"
import { getCSRFToken } from "../../utils/getToken"
import MyForm from "../../components/form/MyForm"
// import './Checkout.scss'
import Home from "../home/Home"
import { Link } from "react-router-dom"

function Checkout() {

    const URL = 'http://localhost:8000/api/products/orders/create/'
    const { cartItems, clearData } = useCart()


    const checkouSchema = z.object({
        nombre: z.string().min(2, {message: "El nombre es requerido"}),
        apellido: z.string().min(2, {message: "El apellido es requerido"}),
        email: z.string().email("Email requerido").min(2, {message: "El email es requerido"}),
        telefono: z.string().min(2, {message: "El telefono es requerido"}),
        direccion: z.string().min(2, {message: "La direccion es requerida"}),
        ciudad: z.string().min(2, {message: "La ciudad es requerida"}),
        district: z.string().min(2, {message: "El distrito es requerido"}),
        provincia: z.string().min(2, {message: "La provincia es requerida"}),
        postal: z.string().min(2, {message: "El codigo postal es requerido"}),
        dni: z.string().min(2, {message: "El dni es requerido"}),

    })

    const fields = [
        {name: "nombre", placeholder: "Nombre", type: "text"},
        {name: "apellido", placeholder: "Apellido", type: "text"},
        {name: "email", placeholder: "Email", type: "email"},
        {name: "telefono", placeholder: "Telefono", type: "tel"},
        {name: "direccion", placeholder: "Direccion", type: "text"},
        {name: "ciudad", placeholder: "Ciudad", type: "text"},
        {name: "provincia", placeholder: "Provincia", type: "text"},
        {name: "district", placeholder: "Distrito", type: "text"},
        {name: "postal", placeholder: "Codigo Postal", type: "text"},
        {name: "dni", placeholder: "DNI", type: "text"},
    ]

    const handleBuy = async( formData) => {

        try{

            const csrfToken = getCSRFToken()

            const orderedData = {
                customer_name: `${formData.nombre} ${formData.apellido}`,
                customer_email: formData.email,
                shipping_address: formData.direccion,
                phone_number: formData.telefono,
                province: formData.provincia,
                city: formData.ciudad,
                district: formData.district,
                postal_code: formData.postal,
                dni: formData.dni,
                items: cartItems.map(item => ({
                  product: item.id,
                  quantity: item.quantity,
                }))
              };

            const response = await axios.post(
                URL,
                orderedData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken, 
                    },
                }
            )

            console.log('Order created successfully:', response.data);

            clearData()
        } catch (error) {
            console.error('Error creating order:', error.response ? error.response.data : error.message);
        }
        
    }


  return (
    <>
        <h2>Checkout</h2>
        <div>
        <Link to={'/'}>Inicio</Link>
        </div>
        <MyForm fields= {fields} schema={checkouSchema} onSubmit={handleBuy}/>
    </>
  )
}

export default Checkout
