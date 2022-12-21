import React, {useState, useEffect} from "react";
import axios from "axios";
import CardCharacter from "./CardCharacter";

export default function ListCharacter() {
    const [characters, setCharacters] = useState([]);

    const getCharacters = () => {
        /**
         * peticion: get, post, put, delete
         * 
         * recibir informacion = axios.get()
         * enviar informacion = axios.post()
         * actualizar informacion = axios.put()
         * eliminat informacion = axios.delete()
         */
        axios.get("https://rickandmortyapi.com/api/character/?page=2")
        .then((response) => {
            console.log(response.data.results);

            /** actualizando la informacion del estado */
            setCharacters(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getCharacters();
    }, []) /** se hace solo la primera renderizacion */

    return (
        <div className="container">
            <div className="row">
            {
                characters.map((personaje, indice) => {
                    /** la variable figura va ser referencia al apartado de la informacion para el otro componente */
                    return <CardCharacter key={indice} {...personaje} />
                })
            }
            </div>
        </div>
    )
}
