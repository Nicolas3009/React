import Item from "./Item";


const ItemList = ({items}) => {
    return(
        
        items.map(item => (
            <Item
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            imagen={item.imagen}
            precio={item.precio}
            stock={item.stock}
         />  
        ))
    )
}
export default ItemList;