
import ItemList from "./ItemList";
import { products } from "../utilidades/products";
import {obtengoData} from "../utilidades/obtengoData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { idCategoty } = useParams();

    //componentDidMount
useEffect(()=> {
    if (idCategoty === 'undefined'){
        obtengoData(2000, products)
        .then(response => setDatos(response))
        .catch()
    } else{
        obtengoData(2000, products.filter(item => item.categotyId == idCategoty))
        .then(response => setDatos(response))
        .catch()
    }

}, [idCategoty]);



    return (
        <main className="main">
            <section className="hero">
                <h1>Bienvenidos a La Isla</h1>
                <p>La mejor calidad acompañada de los mejores precios</p>
            </section>
            <section className="catalogo" >
  
                    <ItemList items={datos} />
        
            </section>
        </main>
    );
}
export default ItemListContainer;