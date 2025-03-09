import React from "react";
import Header from "./componentes/Header";
import Producto from "./componentes/Producto";
import kiketo from "./assets/fotish.jpg"
import Footer from "./componentes/footer";

const Busqueda:React.FC = () =>{



    return(
        <div className="wrapper-register">
            <Header />
            <main className="contenedor-busqueda">
                <div className="centrador">
            <div className="search-bar">
                    <input type="text" placeholder='Search' />
            </div>
            <div className="prgrid">
                <Producto imagen={kiketo} nombreproducto="el que sea" usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                <Producto imagen={kiketo} nombreproducto="el que sea" usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                <Producto imagen={kiketo} nombreproducto="el que sea" usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                <Producto imagen={kiketo} nombreproducto="el que sea" usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                <Producto imagen={kiketo} nombreproducto="el que sea" usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                <Producto imagen={kiketo} nombreproducto="el que sea" usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                <Producto imagen={kiketo} nombreproducto="el que sea" usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                <Producto imagen={kiketo} nombreproducto="el que sea" usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />

                 
                </div>
            </div>
            </main>
            <Footer></Footer>
        </div>
    )
}
export default Busqueda
