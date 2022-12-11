import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Proptypes from 'prop-types'

const Item = ({listaProductos}) => {

    const [data, setData] = useState([]);

    const {idProducto} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(listaProductos);
            }, 1000)
        });
        if(idProducto) {
            getData.then(res => setData(res.filter(listaProductos => listaProductos.idProducto === idProducto)));
        } else {
            getData.then(res => setData(res));
        } 
    }, [idProducto])
  

    return (
        <div>
                { data && data.map((producto, index) =>{
                    const newKey = `${producto}-${index}`
                    return (
                        <div key={newKey}>
                            <img src={producto.imagen} alt="" />
                            <div>
                                <p>{producto.nombre}</p>
                                <p>{producto.precio}</p>
                            </div>
                        </div>
                    )  
                })
                }     
        </div>
    )
}

Item.proptype = {
    productos: Proptypes.array.isRequired
}

export default Item;