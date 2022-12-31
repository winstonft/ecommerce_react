import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./Formulario.scss";

const Formulario = ({handleId}) => {

    const {cart, totalPrice, clearCart} = useCartContext();

    const order = {
        nombre: '',
        telefono: '',
        ciudad: '',
        direccion: '',
        email: '',
        items: cart.map(product => ({id: product.id, producto: product.name, precio: product.precio, cantidad: product.count})),
        total: totalPrice()
    };

    const [infoUser, setInfoUser] = useState(order);

    const captureInput = (e) => {
        const {name, value} = e.target;
        setInfoUser({...infoUser, [name]:value});
    }

    const saveDataUser = async(e) => {  
        e.preventDefault()
        
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, infoUser)
        .then((res) => {
            handleId(res.id);
            clearCart()
        });
    }

    return (
        <div className="formContainer">
            <h1>Ingresa tus datos de envio:</h1>
            <form onSubmit={saveDataUser}>
                <label>
                    <p>Nombre:</p>
                    <input type="text" name="nombre" onChange={captureInput} value={infoUser.nombre}/>
                </label>
                <label>
                    <p>Teléfono:</p>
                    <input type="text" name="telefono" onChange={captureInput} value={infoUser.telefono}/>
                </label>
                <label>
                    <p>Ciudad:</p>
                    <input type="text" name="ciudad" onChange={captureInput} value={infoUser.ciudad}/>
                </label>
                <label>
                    <p>Dirección:</p>
                    <input type="text" name="direccion" onChange={captureInput} value={infoUser.direccion}/>
                </label>
                <label>
                    <p>Email:</p>
                    <input type="email" name="email" onChange={captureInput} value={infoUser.email}/>
                </label>
                <button type="submit">Terminar compra</button>
            </form>
        </div>
    )
}

export default Formulario;