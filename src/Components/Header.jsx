/** componente funcional */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListaPersonajes from "./ListaPersonajes";
import ListCharacter from "./ListCharacter";

export default function Header(){

    /** retornando el menu de navegacion */
    return (
        <BrowserRouter>
            <header>
                <h1 className="titulo">API RICKY AND MORTY</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="menu">Home</Link>
                        </li>
                        <li>
                            <Link to="/lista_1" className="menu">Lista 1</Link>
                        </li>
                        <li>
                            <Link to="/lista_2" className="menu">Lista 2</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/** manejo de rutas 
             * path => asignacion del nombre de la ruta
             * element => asignamos el componente que va trabajar con la ruta
            */}
            <Routes>
                <Route path="/" />
                <Route path="/lista_1" element={<ListaPersonajes />}/>
                <Route path="/lista_2" element={<ListCharacter />}/>
            </Routes>

        </BrowserRouter>
        
    )
}