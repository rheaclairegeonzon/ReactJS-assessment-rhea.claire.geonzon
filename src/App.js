import './App.css'
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Products from './Products'
import AddProduct from './AddProduct'
import VendorProducts from './VendorProducts'
import ProductDetails from './ProductDetails'
import ProductEdit from './ProductEdit'
import CartItems from './CartItems'
import { ShoppinCartProvider } from './context/shoppingCartContext'

function App() {
  return (
    <ShoppinCartProvider>
      <div className='App'>
        <Routers>
          <Navbar />
          <Routes>
            <Route path='/' element={<Products />}></Route>
            <Route path='/AddProduct' element={<AddProduct />}></Route>
            <Route path='/product/:id' element={<ProductDetails />}></Route>
            <Route path='/vendor' element={<VendorProducts />}></Route>
            <Route path='/product/edit/:id' element={<ProductEdit />}></Route>
            <Route path='/cart-item' element={<CartItems />}></Route>
          </Routes>
        </Routers>
      </div>
    </ShoppinCartProvider>
  )
}

export default App
