import { createContext, useContext, useState } from 'react'

const shoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(shoppingCartContext)
}

export function ShoppinCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function increaseCartQuantity(prod) {
    console.log('prod', prod)
    alert('An was added to your cart');
    const exist = cartItems.find((x) => x.id === prod.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === prod.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...prod, qty: 1 }])
    }
  }

  function decreaseCartQuantity(prod) {
    console.log('prod', prod)
    const exist = cartItems.find((x) => x.id === prod.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== prod.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === prod.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  function removeFromCart(prod) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== prod.id)
    })
  }

  return (
    <shoppingCartContext.Provider
      value={{
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  )
}
