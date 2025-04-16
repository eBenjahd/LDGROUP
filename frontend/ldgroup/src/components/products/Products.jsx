import Axios from 'axios';
import { useState, useEffect } from 'react';

import './Products.scss'
import Button from './components/Button';

function Products({URL,title}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchProducts = async () => {
            try {
                const response = await Axios.get(URL)
                setProducts(response.data);
                setLoading(false);
            }
            catch (error){
                setError(error);
                setLoading(false);
            }
        }

        fetchProducts()
    },[])

    

    return (

    <main>
        <h1>
            {title ? title : 'Productos'}
        </h1>
        <div className='products-cart'>

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}

            {products && products.map((product)=>(

                product.is_active &&
                <article className='product-cart' key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>S/. {product.price}</p>

                    <Button product = {{ id: product.id, name: product.name, price: product.price }}/>
                </article>

            ))}
        
        </div>
    </main>
  )
}

export default Products
