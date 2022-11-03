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
          <h3>{titulo}</h3>
          <div className="imagen">
          <img src={imagen} alt="Same alt value" />
          </div>
          <div className="descripcionProducto">
          
          <p> Stock: {stock}</p>
          <span>$ {precio}</span>
          <button>Mas información </button>
          </div>
      </div>

    );
}
export default Item;

