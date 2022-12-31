import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { categoriaid } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, 'productos');

    if(categoriaid){
        const queryFilter = query(itemCollection, where('categoria', '==', categoriaid))
        getDocs(queryFilter).then(res => setItem(res.docs.map(product => ({id: product.id, ...product.data()}))) );
    } else {
        getDocs(itemCollection).then(res => setItem(res.docs.map(product => ({id: product.id, ...product.data()}))) );
    }
  }, [categoriaid]);

  return (
    <div className="list__container">
      <div className="itemlist__container">
        {item &&
          item.map((producto, index) => {
            const newKey = `${producto}-${index}`;
            return (
              <Link to={`/item/${producto.idProducto}`} key={newKey} className="list__container__item">
                <img src={producto.imagen} alt="" width={350} />
                <div className='list__container__info'>
                  <p className="list__container__items">{producto.nombre}</p>
                  <p className="list__container__items">{producto.precio}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

ItemListContainer.proptype = {
  productos: Proptypes.array.isRequired,
};
export default ItemListContainer;
