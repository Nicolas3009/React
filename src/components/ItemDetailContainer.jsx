import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {obtengoData} from "../utilidades/obtengoData";
import { useParams } from "react-router-dom";
const {products} = require("../utilidades/products")


const ItemDetailContainer = () => {
    

    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    //componentDidMount
useEffect(()=>{ 
    obtengoData(2000, products.find(item => item.id == idItem))
    .then(response => setDato(response))
    .catch()
   
}, []);



    return (
   <ItemDetail item={dato} />
                       
    );
}
export default ItemDetailContainer;