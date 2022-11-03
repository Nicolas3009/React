import { useState } from "react";

const ItemDetail = ({ item }) => {

  const [contador, setContador] = useState(0);

  const sumaCarrito = () => {
    setContador(contador + 1)
  }
  const restaCarrito = () => {
    setContador(contador - 1)
  }

  return (
    <div className="contenedorDetalleProducto">
      <div className="contenedorImagen">
        <img src={item.imagen} alt="Same alt value" />
      </div>
      <div className="descripcion">
        <h3>{item.titulo}</h3>
       <p>{item.descripcion}</p>
       <p>{item.materiales}</p>
       <p>{item.medidas}</p>
       <p>{item.elementos}</p>
        <p>Stock: {item.stock}</p>
        <span>$ {item.precio}</span>
        <div>
          <button onClick={sumaCarrito}>+</button>
          <p>{contador} </p>
          <button onClick={restaCarrito}>-</button>
        </div>


      </div>
    </div>

  );
}
export default ItemDetail;