import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cartList, borrarCarrito, borrarItemDelCarrito, calcularTotal, comprar} = useContext(CartContext)

    

    return (
        <>
            <div className="h1Carrito">
                <h1>Carrrito</h1>
                <hr />
            </div>
            <Link to='/' > <button className="volverAComprar">Ir a comprar</button></Link>
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
                                <div>Cantidad: {item.contador}</div>
                                <div>$ {item.precio * item.contador}</div>
                                <button onClick={() => borrarItemDelCarrito(item.id)}>X</button>
                            </div>
                            <hr className="hr" />
                        </>)
            }

            {
                cartList.length === 0
                    ? <div className="vaciarCarritoNulo">
                        <button onClick={borrarCarrito}>Vaciar carrito</button>
                    </div>
                    : <div className="vaciarCarrito">
                        <div><p>Total del carrito: $ {calcularTotal()}</p></div>
                        <div>
                        <button onClick={borrarCarrito}>Vaciar carrito</button>
                        <button className="comprar" onClick={comprar}>Comprar</button>
                        </div>  
                    </div>
            }



        </>
    );
}

export default Cart;