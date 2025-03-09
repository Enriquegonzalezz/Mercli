import React from "react";
import Header from "./componentes/Header";

const Busqueda:React.FC = () =>{
    return(
        <div className="wrapper-register">
            <Header />
            <main className="contenedor-busqueda">
            <div className="search-bar">
                    <input type="text" placeholder='Search' onFocus={SearchBar}/>
                </div>
            </main>
        </div>
    )
}
export default Busqueda
