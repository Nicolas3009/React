import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../utilidades/configBD'
import { updateForm } from "react";

const Cart = () => {
    const { cartList, borrarCarrito, borrarItemDelCarrito, calcularTotal, } = useContext(CartContext)


    const createOrder = () => {
        let order = {
            comprador: {
                name: 'Lionel Messi',
                email: 'Lionelmessi02@gmail.com',
                phone: '3492301923',
            },
            date: serverTimestamp(),
            items: cartList.map(item => ({
                id: item.id,
                title: item.titulo,
                price: item.precio,
                qty: item.contador,
            })),

            total: calcularTotal(),
        }

        const createOrderBD = async () => {
            const nuevaOrden = doc(collection(db, 'orders'))
            await setDoc(nuevaOrden, order);
            return nuevaOrden
        }

        createOrderBD()
            .then(() => {
                alert('Se creó la orden en la base de datos. Gracias por su compra!')
                cartList.forEach(async (item) => {
                    const itemRef = doc(db, 'products', item.id);
                    await updateDoc(itemRef, {
                        stock: increment(-item.contador)
                    })
                        .then(() => { updateForm.reset() })
                })
                borrarCarrito()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="h1Carrito">
                <h1>Carrito</h1>
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
                                <div>Total: ${item.precio * item.contador}</div>
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
                            <button className="comprar" onClick={createOrder}>Comprar</button>
                        </div>
                    </div>
            }



        </>
    );
}

export default Cart;