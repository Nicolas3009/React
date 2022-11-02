import { useState } from "react";

const Item = ({imagen, titulo, descripcion, stock, precio}) => {

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
          <img src={imagen} alt="Same alt value" />
          </div>
          <div className="descripcionProducto">
          <h3>{titulo}</h3>
          <p>Descripción: {descripcion}</p>
          <p>Stock: {stock}</p>
          <span>$ {precio}</span>
          <button onClick={sumaCarrito}>Sumar al carrito</button> 
          <p>{contador} productos en el carrito de compras.</p>
          <button onClick={restaCarrito}>Restar al carrito</button>
         
          </div>
      </div>

    );
}
export default Item;

