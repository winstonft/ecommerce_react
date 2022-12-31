import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Cart from '../icons/Cart'
import './CartWidget.css'

const Cardwidget = () => {

    const {totalProducts} = useCartContext();

    return (
        <Link to="cart">
            <a href='/' className='cartwidget'>
            <Cart/>
                <span className="item__total" id="spanCart">{totalProducts() || '0'}</span>
            </a>
        </Link>
    )
}

export default Cardwidget;