import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {

  const [cantidad, setCantidad] = useState()

  const agregarAlCarrito = (contador) => {
    alert("Usted a seleccionado " + " " + contador + " " + "productos"); 
      setCantidad(contador);
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
        
        {
        cantidad > 0
        ? <button><Link to={'/cart'}> Ir al carrito</Link></button>
        : <ItemCount agregarAlCarrito={agregarAlCarrito} stock={item.stock}/>
        
      }
      </div>
    </div>

  );
      }
export default ItemDetail;

