import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { listaProductos } from "../../mock";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { categoriaid } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(listaProductos);
      }, 1000);
    });
    if (categoriaid) {
      getData.then((res) =>
        setItem(
          res.filter(
            (listaProductos) => listaProductos.categoria === categoriaid
          )
        )
      );
    } else {
      getData.then((res) => setItem(res));
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
