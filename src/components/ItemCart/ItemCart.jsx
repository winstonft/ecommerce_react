import React from "react";
import { useCartContext } from "../../context/CartContext";


const ItemCart = ({product}) => {

    const {removeProduct} = useCartContext();

    return (
        <div className="itemCardContainer">
            <div className="itemCardImg">
                <img src={product.img} alt="" />
            </div>
            <div className="itemCardInfo">
                <p>Producto: {product.name}</p>
                <p>Cantidad: {product.count}</p>
                <p>Precio: ${product.precio}</p>
                <p>Subtotal: ${product.count * product.precio}</p>
                <button onClick={() => removeProduct(product.id)} className="itemCardEliminar">Eliminar Producto</button>
            </div>
        </div>
    )
}

export default ItemCart;