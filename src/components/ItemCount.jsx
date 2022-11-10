import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ item, agregarAlCarrito }) => {

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

  {
 return (
        <>
               <div>
               <button onClick={sumaCarrito}>+</button>
               <p>{contador} </p>
               <button onClick={restaCarrito}>-</button>
               <div>
                 <button onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
               </div>
             </div>
             <button><Link to='/cart'>revisar carrito</Link></button>
            
        </>
    );
   
  }
  

}
export default ItemCount;