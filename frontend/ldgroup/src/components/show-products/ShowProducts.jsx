import Products from "../products/Products"
import { useProducts } from "../../context/ProductsContext"

function ShowProducts() {
  const {loading, error, products} = useProducts()
  return (
    <>
      <Products title={'Productos'}loading={loading} error={error} products={products} />
    </>
  )
}

export default ShowProducts
