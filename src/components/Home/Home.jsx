import Proptypes from 'prop-types'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import "./Home.css";

const Home = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'tipos');
        
        getDocs(itemCollection).then(res => setInfo(res.docs.map(product => ({id: product.id, ...product.data()}))) );
    }, [])

    return (
        <div className='home_container'>
            <div className='home_container__productos'>
                { info && info.map((tipoProducto, index) =>{
                    const newKey = `${tipoProducto}-${index}`
                    return (
                        <Link to={tipoProducto.href} key={newKey} className="home_container__link">
                            <img src={tipoProducto.imagen} alt="" width={500} height={500} />
                            <div className='home__productos'>
                                <p className='home__nombreProductos'>{tipoProducto.nombre}</p>
                            </div>
                        </Link>
                    )  
                })
                } 
            </div>      
        </div>
        )
}

Home.proptype = {
    tiposProductos: Proptypes.array.isRequired
}
export default Home;