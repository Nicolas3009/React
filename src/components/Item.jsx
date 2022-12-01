
import { Link } from "react-router-dom";

const Item = ({imagen, titulo, id, stock, precio}) => {
     
    return (
        <div className="contenedorProductos">
          <h3>{titulo}</h3>
          <div className="imagen">
          <img src={imagen} alt="Same alt value" />
          </div>
          <div className="descripcionProducto">
          
          <p> Stock: {stock}</p>
          <span>$ {precio}</span>
          <Link to={`/item/${id}`}> <button>Ver detalle</button></Link>
         
          </div>
      </div>

    );
}
export default Item;

