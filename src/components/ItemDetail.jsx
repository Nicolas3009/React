import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom"; 
import ItemCount from './ItemCount';

const ItemDetail = ({ item, contador }) => {

  const agregarAlCarrito = () => {
      alert("Usted a seleccionado " + " " + contador + " " + "productos");  
      <Navigate  to='/cart'/>
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
        <ItemCount  agregarAlCarrito={agregarAlCarrito} />
      </div>
    </div>

  );
      }
export default ItemDetail;

