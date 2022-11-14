import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = (props) => {

    
    const [cartList, setCartList] = useState([])
   
   const addToCart = (item, contador) =>{
setCartList([
    ...cartList,
    {
        id: item.id,
        titulo: item.titulo,
        precio: item.precio,
        contador: contador,
    }
   
]);
   }

   const borrarCarrito = () => {
    setCartList([])
   }

   const borrarItemDelCarrito = (id) => {
let nuevoArray = cartList.filter(item => item.id != id)
setCartList(nuevoArray)
   }

    return (
        <CartContext.Provider value={{cartList, addToCart, borrarCarrito, borrarItemDelCarrito}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;