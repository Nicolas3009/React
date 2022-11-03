
import ItemList from "./ItemList";
import { products } from "../utilidades/products";
import {obtengoData} from "../utilidades/obtengoData";
import { useEffect, useState } from "react";


const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);

    //componentDidMount
useEffect(()=> {
    obtengoData(2000, products)
    .then(response => setDatos(response))
    .catch()

}, [])



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