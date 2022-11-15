import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartList, borrarCarrito, borrarItemDelCarrito } = useContext(CartContext)

    return (
        <>
            <div className="h1Carrito"><h1>  Carrrito</h1></div>
            {
                cartList.length === 0
                    ? <div className="tuCarritoVacio">
                        <p>
                            Tu carrito esta vacio!
                        </p>
                    </div>
                    : cartList.map(item =>
                        <>
                            <div className="items">
                                <div> <img src={item.imagen} alt="Same alt value" /></div>
                                <div> {item.titulo}</div>
                                <div>${item.precio}</div>
                                <div>Cantidad:{item.contador}</div>
                                <button onClick={() => borrarItemDelCarrito(item.id)}>X</button>
                            </div>
                        </>)
            }
            {
                cartList.length === 0
                    ? <div className="vaciarCarritoNulo">
                        <button onClick={borrarCarrito}>Vaciar carrito</button>
                    </div>
                    : <div className="vaciarCarrito">
                        <button onClick={borrarCarrito}>Vaciar carrito</button>
                    </div>
            }


        </>
    );
}

export default Cart;