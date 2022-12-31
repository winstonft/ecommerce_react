import {useState} from 'react';

const Itemcount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const sumar = () => {
        setCount(count + 1);
    }

    const restar = () => {
        setCount(count - 1)
    }

    return(
        <div className="itemcount__conteiner">
            <div>
                <button disabled={count >= stock} onClick={sumar}>+</button>
                <span>{count}</span>
                <button disabled={count <= 1} onClick={restar}>-</button>
            </div>
            <button className="itemcount__agregar" onClick={()=> onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Itemcount