import Header from "./componentes/Header";
import Footer from "./componentes/footer";
import kiketo from "./assets/fotish.jpg"
import React from "react";
import Producto from "./componentes/Producto";

const Profile: React.FC = () => {
    return(
        <>
        <div className="wrapper-register">
            <header><Header /></header>
            <main>

                <div className="textotienda">
                    <p>Ecommerce de ecoshopiy</p>
                </div>
                <div className="contenedortienda">
                    <div className="congrid2">
                        <Producto imagen={kiketo} nombreproducto="el que sea" usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                        <Producto imagen={kiketo} nombreproducto="el que sea"
                        usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                        <Producto imagen={kiketo} nombreproducto="el que sea"
                        usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                        <Producto imagen={kiketo} nombreproducto="el que sea"
                        usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                        <Producto imagen={kiketo} nombreproducto="el que sea"
                        usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                        <Producto imagen={kiketo} nombreproducto="el que sea"
                        usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                         <Producto imagen={kiketo} nombreproducto="el que sea"
                        usertienda="ecoshopiy" valoracion= {4.5}  precio= {70} />
                        

                        
                    </div>
                </div>
            </main>
            <footer><Footer/></footer>
        </div>
        </>
    )
}

export default Profile