import React from 'react'
import Cart from '../icons/Cart'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <a href='/' className='cartwidget'>
        <Cart/>
        <span>2</span>
    </a>
  )
}

export default CartWidget