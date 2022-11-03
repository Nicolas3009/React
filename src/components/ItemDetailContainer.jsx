import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {obtengoData} from "../utilidades/obtengoData";
const {products} = require("../utilidades/products")

const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});

    //componentDidMount
useEffect(()=> {
    obtengoData(2000, products[0])
    .then(response => setDato(response))
    .catch()

}, [])



    return (
   <ItemDetail item={dato} />
                       
    );
}
export default ItemDetailContainer;