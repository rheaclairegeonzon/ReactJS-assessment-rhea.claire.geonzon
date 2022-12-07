import { Link } from 'react-router-dom'
import { useShoppingCart } from './context/shoppingCartContext'
import Cart from "./cart.png";

const ProductList = ({ products }) => {
  const { increaseCartQuantity } = useShoppingCart()
  return (
    <div className='prod-list'>
      <h2>LIST OF PRODUCTS</h2>
      {products.map((prod) => (
        <div className='prod-preview' key={prod.id}>
          <Link to={`/product/${prod.id}`}>
          <img src ={ Cart } alt="logo" style={{ width: '200px', }}/>
            <h2>{prod.name}</h2>
            <h4>₱ {prod.price}</h4>
            <p>{prod.category}</p>
            <p>{prod.brand}</p>
          </Link>
          <button onClick={() => increaseCartQuantity(prod)} className='btn-add'>
            ADD TO CART
          </button>
        </div>
      ))}
    </div>
  )
}


export default ProductList;