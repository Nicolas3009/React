
import ItemList from "./ItemList";
import {obtengoData} from "../utilidades/obtengoData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utilidades/configBD";
import { collection, getDocs } from "firebase/firestore"; 

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { idCategoty } = useParams();

    //componentDidMount
useEffect(async ()=> {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });

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