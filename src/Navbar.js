import { Link } from 'react-router-dom'
import { useState } from 'react'
import useFetch from './useFetch'

const Navbar = () => {
  // const [products, prodChange] = useState(null);
  const [cartItems, setCartItems] = useState([])
  const {
    data: products,
    isPending,
    error,
  } = useFetch('http://localhost:3004/products')

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  return (
    <nav className='navbar'>
      <h1>RHEA SHOPPING CART</h1>
      <div className='links'>
        <Link to='/'>Products</Link>
        <Link to='/cart-item'> Cart Items</Link>
      </div>
    </nav>
  )
}

export default Navbar
