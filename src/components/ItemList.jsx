import Item from "./Item";


const ItemList = ({items}) => {
    return(
        
        items.map(item => (
            <Item
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