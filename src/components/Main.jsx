import ItemListContainer from "./ItemListContainer";
import { data } from "../utilidades/data";
import {obtengoData} from "../utilidades/obtengoData";
import { useEffect, useState } from "react";

const Main = () => {

    const [datos, setDatos] = useState([]);

    //componentDidMount
useEffect(()=> {
    obtengoData(3000, data)
    .then(response => setDatos(response))
    .catch()

}, [])



    return (
        <main className="main">
            <section className="hero">
                <h1>Bienvenidos a mi e-commer</h1>
            </section>
            <section className="catalogo" >

                {
                    datos.map(item => (
                        <ItemListContainer
                        key={item.id}
                        titulo={item.titulo}
                        imagen={item.imagen}
                        descripcion={item.descripcion}
                        precio={item.precio} />  
                    ))
                }
               
            </section>
        </main>
    );
}
export default Main;