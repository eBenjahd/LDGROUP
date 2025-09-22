import useInventory from '../../hooks/useInventory';

import './Products.scss'
import Button from './components/Button';

function Products({title,products,loading,error}) {

    const inventory = useInventory(products);

    return (

    <section>
        <h2>
            {title ? title : 'Productos'}
        </h2>
        <div className='products-cart'>

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}

            {products && products.map((product)=>(

                product.is_active &&
                <article className='product-cart' key={product.id}>

                    {product.image ? <img src={`${product.image}`} alt={product.name} /> : <p>No hay imagen</p>}
                    <h3>{product.name}</h3>
                    <p className='price'>S/.{product.price}</p>

                    <Button  inventory={inventory} product = {{
                        ...product,
                        image: product.image ? `${product.image}` : null}}  
                    />
                </article>

            ))}
        
        </div>
    </section>
  )
}

export default Products
