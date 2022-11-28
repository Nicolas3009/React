import { useEffect, useState } from "react";
import { db } from "../utilidades/configBD";
import { collection, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    

    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    //componentDidMount
useEffect(()=>{ 
    const coleccionProd = collection (db, "Products")
    const referenciaDoc =doc(coleccionProd, idItem)
    getDoc(referenciaDoc)
    .then((result=>{
        setDato({
            id:result.id,
            ...result.data()
        })
    }))
    .catch((error)=>console.log(error))
}, [idItem])
    



    return (
   <ItemDetail item={dato} />
                       
    );
}
export default ItemDetailContainer;