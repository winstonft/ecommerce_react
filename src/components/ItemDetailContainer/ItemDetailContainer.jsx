import Proptypes from 'prop-types'
import { listaProductos } from "../../mock";

import Item from "../Item/Item";

const ItemDetailContainer = () => { 

    return (
        <div>
                <Item listaProductos={listaProductos} />
        </div>
    )
}

ItemDetailContainer.proptype = {
    productos: Proptypes.array.isRequired
}

export default ItemDetailContainer;
