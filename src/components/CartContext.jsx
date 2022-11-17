import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = (props) => {

    
    const [cartList, setCartList] = useState([])
   
   const addToCart = (item, contador) =>{
    let sumarItem = cartList.find(product => product.id === item.id);
    if (sumarItem === undefined) {
setCartList([
    ...cartList,
    {
        id: item.id,
        imagen: item.imagen,
        titulo: item.titulo,
        precio: item.precio,
        contador: contador,
    }
   
]);
} else {
    sumarItem.contador += contador;
}
   }

   const borrarCarrito = () => {
    setCartList([])
   }

   const borrarItemDelCarrito = (id) => {
let nuevoArray = cartList.filter(item => item.id != id)
setCartList(nuevoArray)
   }



   const calcularPrecioXItem = (item) => {
    let index = cartList.map(item => item.id).indexOf(item.id);
    return cartList[index].item.precio * cartList[index].contador;
}



    return (
        <CartContext.Provider value={
            {cartList, 
            addToCart, 
            borrarCarrito, 
            borrarItemDelCarrito, 
            calcularPrecioXItem}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;