import React, {useState, useEffect} from "react";
import axios from "axios";
import TarjetaPersonajes from "./TarjetaPersonajes";

export default function ListaPersonajes(){
    /** props */

    /** useState => maneja 2 parametros:
     * 1 parametro = maneja la inicializacion del estado y guarda la informacion del estado
     * 2 parametro = actualiza la informacion del estado
    */
    const [personajes, setPersonajes] = useState([]);

    /** metodo para conectarnos a la api ricky and morty */
    const obtenerPersonajes = () => {
        /**
         * peticion: get, post, put, delete
         * 
         * recibir informacion = axios.get()
         * enviar informacion = axios.post()
         * actualizar informacion = axios.put()
         * eliminat informacion = axios.delete()
         */
        axios.get("https://rickandmortyapi.com/api/character/")
        .then((response) => {
            console.log(response.data.results);

            /** actualizando la informacion del estado */
            setPersonajes(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    /** recibe 2 parametros = 
     *  1. el llamado de los metodos o del estado
     *  2. limite para renderizar los metodos o el estado ([])
     * 
     * useEffect => hace equivalencia a los 3 ciclos de vida: componentDidMount(), componenteUpdateMount()
     *                                                        componentWillMount()
     */
    useEffect(() => {
        obtenerPersonajes();
    }, []) /** se hace solo la primera renderizacion */
    
    console.log(personajes);
    return (
        <div className="container">
            <div className="row">
            {
                personajes.map((personaje, indice) => {
                    /** la variable figura va ser referencia al apartado de la informacion para el otro componente */
                    return <TarjetaPersonajes key={indice} figura={personaje} />
                })
            }
            </div>
        </div>
    )
    
}


