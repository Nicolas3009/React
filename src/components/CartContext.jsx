import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = (props) => {

    
    const [cartList, setCartList] = useState([])
   
   const addToCart = (item, contador) =>{
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
   }

   const borrarCarrito = () => {
    setCartList([])
   }

   const borrarItemDelCarrito = (id) => {
let nuevoArray = cartList.filter(item => item.id != id)
setCartList(nuevoArray)
   }



   const calcularPrecioTotal = (item) => {
    let index = cartList.map(item => item.id).indexOf(item.id);
    return cartList[index].item.precio * cartList[index].item.contador;
}



   const sumarItems = () => {
    let cantidadItem = cartList.map(item => item.contador);
    return  cantidadItem.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
}


    return (
        <CartContext.Provider value={
            {cartList, 
            addToCart, 
            borrarCarrito, 
            borrarItemDelCarrito, 
            sumarItems, 
            calcularPrecioTotal}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;