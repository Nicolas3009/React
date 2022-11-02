import Item from "./Item";
import ItemListContainer from "./ItemListContainer";

const ItemList = () => {
    return(
        
        Item.map(item => (
            <ItemListContainer
            key={item.id}
            titulo={item.titulo}
            imagen={item.imagen}
            descripcion={item.descripcion}
            precio={item.precio}
            stock= {item.stock} />  
        ))
    )
}
export default ItemList;