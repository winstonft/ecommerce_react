import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.scss";
import Formulario from "../Formulario/Formulario";

const Checkout = () => {

    const [orderId, setOrderId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (orderId) {
        return (
            <div className="checkoutContainer">
                <p>Gracias por tu compra, te dejamos el número de orden:</p>
                <p className="checkoutOrder">{' '}{orderId}</p>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div>
            <Formulario handleId={handleId}/>
        </div>
    );
};

export default Checkout;