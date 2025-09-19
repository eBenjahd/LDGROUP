import { useProducts } from "../../context/ProductsContext"
import Products from "../products/Products"

function NewProducts() {
    const {products, error, loading} = useProducts()


    const newProducts = products.filter(p => {
        const twoMonthsAgo = new Date()
        twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2)
        return new Date(p.created_at) > twoMonthsAgo;
    })
  return (
    <Products title='Nuevos productos' products={newProducts} loading={loading} error={error}/>
  )
}

export default NewProducts
