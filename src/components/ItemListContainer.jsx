
import ItemList from "./ItemList";
import { obtengoData } from "../utilidades/obtengoData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utilidades/configBD";
import { collection, getDocs, where, query } from "firebase/firestore";


const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { idCategoty } = useParams();

    //componentDidMount
    useEffect( () => {
        const querySnapshot = idCategoty? query(collection(db, "Products"), where("categotyId", "==", Number(idCategoty))):collection(db,"Products")
        getDocs(querySnapshot)
            .then((result) => {
                const lista=
                result.docs.map((producto)=>{
                return {
                    id: producto.id,
                    ...producto.data()
                }
            })
        setDatos(lista)
    })

}, [idCategoty])




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