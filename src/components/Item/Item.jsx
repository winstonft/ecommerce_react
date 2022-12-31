import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore,} from 'firebase/firestore'
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Proptypes from 'prop-types'

const Item = () => {

    const {addProduct} = useCartContext();
    const [data, setData] = useState([]);

    const {itemid} = useParams();

    const onAdd = (quantity) => {
        addProduct(data,quantity);
    }

    useEffect(() => {
        const db = getFirestore();
        const dbDoc = doc(db, 'item', itemid)
        getDoc(dbDoc).then(res => setData({id: res.id, ...res.data() }));
    }, [itemid])
  

    return (
        <div>
        <div>
            <img src={data.imagen} alt="" />
            <div>
                <p>{data.nombre}</p>
                <p>${data.precio}</p>
                <ItemCount stock = {data.stock} initial = {1} onAdd={onAdd}/>
                <p>Descripción:</p>
                <p className="detail__itemsDesc">{data.desc}.</p>
            </div>
        </div> 
    </div>
    )
}

Item.proptype = {
    productos: Proptypes.array.isRequired
}

export default Item;