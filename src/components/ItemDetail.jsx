import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {

  const [cantidad, setCantidad] = useState()
  const {addToCart} = useContext(CartContext)

  const agregarAlCarrito = (contador) => {
    alert("Usted a seleccionado " + " " + contador + " " + "productos"); 
      setCantidad(contador);
      addToCart(item, contador);
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
        ? <Link to={'/cart'}><button> Ir al carrito</button></Link>
        : <ItemCount agregarAlCarrito={agregarAlCarrito} stock={item.stock}/>
        
      }
      </div>
    </div>

  );
      }
export default ItemDetail;

