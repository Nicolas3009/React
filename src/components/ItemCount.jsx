import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({  agregarAlCarrito, stock }) => {

const [contador, setContador] = useState(0);

  const sumaCarrito = () => {
    if (contador < stock) {
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
                 <button onClick={() => agregarAlCarrito(contador)}>Agregar al carrito</button>
               </div>
             </div>
            
        </>
    );
   
  }
  

}
export default ItemCount;