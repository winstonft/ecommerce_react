import Proptypes from 'prop-types'
import Item from "../Item/Item";

const ItemDetailContainer = () => { 

    return (
        <div>
                <Item />
        </div>
    )
}

ItemDetailContainer.proptype = {
    productos: Proptypes.array.isRequired
}

export default ItemDetailContainer;
