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



   const calcularTotal = () => {
    // variable inicializada en 0.
            let total = 0
    // realizo un forEach y por cada vuelta que sume el total + (precio x cantidad)
            cartList.forEach(Item => {
                total = total + Item.precio * Item.contador
            })
    // retorne el total.
            return total
        }

const comprar = () => {
    alert('Su total es de: $' + " " + calcularTotal());
    setCartList([])
    alert('¡Gracias por su compra!')
}

    return (
        <CartContext.Provider value={
            {cartList, 
            addToCart, 
            borrarCarrito, 
            borrarItemDelCarrito, 
            calcularTotal,
            comprar,
            }}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;