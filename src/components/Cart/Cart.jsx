import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {

    const {cart, totalPrice} = useCartContext();

    if(cart.length === 0) {
        return (
            <div className="noCartElement">
                <p className="noCartElementTittle">Todavia no agregaste ningun elemento al carrito</p>
                <Link to='/' className="CartInicio">Ir al inicio</Link>
            </div>
        )
    }

    return (
        <div className="cartContainer">
            <div>
                {
                    cart.map(product => <ItemCart key={product.id} product={product}/>)
                }
            </div>
            <div className="totalPriceContainer">
                <p className="totalPrice">Total: ${totalPrice()}</p>
                <Link to='/checkout'><button>Terminar la compra</button></Link>
            </div>
        </div>
    )
}

export default Cart;