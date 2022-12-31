import react, { useState, useContext } from 'react'
const CartContext = react.createContext(null)

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addProduct = (item, count) => {
    if(isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? {...product, count: product.count + count} : product;
      }))
    } else {
      setCart([...cart , {...item, count}]);
    }
  }

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.count * act.precio, 0)
  }

  const totalProducts = () => cart.reduce((acumulador, productoTotal) => acumulador + productoTotal.count, 0)
  
  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{clearCart, isInCart, removeProduct, addProduct, totalProducts, totalPrice, cart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider