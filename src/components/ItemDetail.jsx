import { useState } from "react";

const ItemDetail = ({item}) => {

   const [contador, setContador] = useState(0);

    const sumaCarrito = () => {
       setContador(contador+1)
    }
    const restaCarrito = () => {
        setContador(contador-1)
     }
     
    return (
        <div className="contenedorProductos">
          <div className="imagen">
          <img src={item.imagen} alt="Same alt value" />
          </div>
          <div className="descripcionProducto">
          <h3>{item.titulo}</h3>
          <p>Descripción: {item.descripcion}</p>
          <p>Stock: {item.stock}</p>
          <span>$ {item.precio}</span>
          <button onClick={sumaCarrito}>Sumar al carrito</button> 
          <p>{contador} productos en el carrito de compras.</p>
          <button onClick={restaCarrito}>Restar al carrito</button>
         
          </div>
      </div>

    );
}
export default ItemDetail;