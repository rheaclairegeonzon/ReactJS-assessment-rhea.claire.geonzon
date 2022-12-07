import React from 'react'
import { useShoppingCart } from './context/shoppingCartContext'
import { useState } from 'react'

const CartItems = () => {
  const {
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  const cartPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const shippingPrice = cartPrice > 2000 ? 0 : 50
  const totalPrice = cartPrice + shippingPrice
  const [checkoutText, setcheckoutText] = useState("")
  const [checkoutStyle, setcheckoutStyle] = useState("display")

  function handleClick() {
    setcheckoutText("Thank you for shopping with us!");
    setcheckoutStyle("checkOutContainer");
  }
  

  return (
    <div className='cartContainer'>
      <h1>Shopping Cart Items</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          return (
            <div key={item.id} className='cartListings'>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.brand}</p>
              <p>{item.category}</p>
              <p>₱{item.price}</p>
              <div className='actionTriggers'>
                <button onClick={() => decreaseCartQuantity(item)}>-</button>
                <div className='qtyContainer'>
                  {item.qty > 0 ? <p>{item.qty}x</p> : ''}
                </div>
                <button onClick={() => increaseCartQuantity(item)}>+</button>
              </div>

              <div>
                <button className='removeItem' onClick={() => removeFromCart(item)} > Remove </button>
              </div>
            </div>

          )

        })
      ) : (
        <div className='noItems'>No items in cart</div>
      )}
      {/* {cartItems.length > 0 ? (
        <div className='total'>
          <p>Shipping Price: ₱ {shippingPrice} </p>
          <p>Total Items: ₱ {totalPrice} </p>
          <div></div>
       
        </div>
      ) : null} */}
    <button onClick={() => handleClick()} className='btn-primary top'>CHECKOUT ITEMS</button>
    <div className="checkout"> {checkoutText} </div>

    <div className={checkoutStyle} >
      <h3>Rhea Shopping Cart</h3>
      <p>Shopping Cart Assessment ReactJS</p>
      <p>By: Rhea Claire Geonzon (rhea.claire.geonzon)</p>
      <hr></hr>
      <br />
      <b><p>SERVE AS CHECKOUT RECEIPT</p></b>
      
    {cartItems.length > 0 ? (
       cartItems.map((item) => {
        return (
                <div className='checkOut'>
                  <p>{item.name}</p>
                  <p>{item.qty}</p>
                </div>
              )
              })
      ) : null}
        {cartItems.length > 0 ? (
        <div className=''>
          <p>Shipping Price: ₱ {shippingPrice} </p>
          <h4><p>Total Price: ₱ {totalPrice} </p></h4>
        </div>
      ) : null}
    </div>
    </div>
  )
}

export default CartItems
