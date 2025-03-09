import React from "react"
import Header from "./componentes/Header"
import Footer from "./componentes/footer"
import "./index.css"
import Productoencarro from "./componentes/productoencarro"



const Carrito: React.FC = () => {
    return (
        <div className="wrapper-register">
            <header><Header /></header>
            <main className="centrycar">
                <div className="infodecarrito">
                    <nav>
                        <p>Carrito (6)</p>
                        <p>Total: 90$</p>
                    </nav>
                </div>
                <div className=
                "carritoitems">
                        <Productoencarro nombre="kiketo"  Numero={14.90} items={1}/>
                        <Productoencarro nombre="kiketo"  Numero={14.90} items={1}/>
                        <Productoencarro nombre="kiketo"  Numero={14.90} items={1}/>
                        <Productoencarro nombre="kiketo"  Numero={14.90} items={1}/>

                </div>
                <div className="comprar">
                    <img className="bolso"src="../src/assets/bolsito.svg" alt="" />
                    <p className="com">Comprar</p>
                </div>
            </main>
            <footer><Footer/></footer>
        </div>
    )}



export default Carrito