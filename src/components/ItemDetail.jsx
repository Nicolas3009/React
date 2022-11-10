import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom"; 

const ItemDetail = ({ item }) => {

  const [contador, setContador] = useState(0);

  const sumaCarrito = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    }
  }
  const restaCarrito = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }


  const agregarAlCarrito = () => {
      alert("Usted a seleccionado " + " " + contador + " " + "productos");  
      <Navigate  to='/Cart'/>
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

          contador === 0
            ? <>
              <div>
                <button onClick={sumaCarrito}>+</button>
                <p>{contador} </p>
                <button onClick={restaCarrito}>-</button>
              </div>
            </>
            : <div>
              <button onClick={sumaCarrito}>+</button>
              <p>{contador} </p>
              <button onClick={restaCarrito}>-</button>
              <div>
                <button onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
              </div>
            </div>


        }

        <button><Link to='/Cart'>revisar carrito</Link></button>

      </div>
    </div>

  );
      }
export default ItemDetail;

