import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartList, borrarCarrito, borrarItemDelCarrito } = useContext(CartContext)

    return (
        <>
            <h1> Carrrito</h1>
            {
                cartList.length === 0
                    ? <div>
                        <p>
                            Tu carrito esta vacio!
                        </p>
                    </div>
                    : cartList.map(item =><> <button onClick={borrarCarrito}>Vaciar carrito</button> <div>Nombre: {item.titulo} - Precio:{item.precio} - Cantidad:{item.contador} <button onClick={() => borrarItemDelCarrito(item.idItem)}>X</button></div></>)
            }
           
        </>
    );
}

export default Cart;