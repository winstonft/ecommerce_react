import { useState, useEffect } from "react";
import Proptypes from 'prop-types'
import {Link} from 'react-router-dom';
import { listaProductos } from "../../mock";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { categoriaid } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(listaProductos);
        }, 1000)
    });
    if(categoriaid) {
        getData.then(res => setItem(res.filter(listaProductos => listaProductos.categoria === categoriaid)));
    } else {
        getData.then(res => setItem(res));
    } 
}, [categoriaid])

return (
  <div>
      <div>
          { item && item.map((producto, index) =>{
              const newKey = `${producto}-${index}`
              return (
                  <Link to={`/item/${producto.idProducto}`} key={newKey}>
                      <img src={producto.imagen} alt="" />
                      <div>
                          <p>{producto.nombre}</p>
                          <p>{producto.precio}</p>
                      </div>
                  </Link>
              )  
          })
          } 
      </div>      
  </div>
)
};

ItemListContainer.proptype = {
  productos: Proptypes.array.isRequired
}
export default ItemListContainer;
