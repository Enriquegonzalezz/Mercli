import React from "react"
import "./Prodcuto.css"
import estrellita from '../assets/Star - Iconly Pro.svg'

interface Propsdelproducto{
    imagen: string,
    nombreproducto:string,
    usertienda:string,
    valoracion:number,
    precio: number
}

const Producto: React.FC<Propsdelproducto> = ({ imagen, nombreproducto, usertienda, valoracion, precio }) => {
    return (
        <div className="wrapper">
            <img className="img" src={imagen} alt={nombreproducto} />
            <div className="info">
                <nav className="fle">
                    <h3>{nombreproducto}</h3>
                    <div className="valo">
                       
                        <p>${precio.toFixed(2)}</p>
                    </div>
                </nav>
                <nav className="fle">
                    <p>{usertienda}</p>
                    <p className="flexi"> <img src={estrellita} alt="" />{valoracion.toFixed(1)}</p>
                </nav>
            </div>
        </div>
        
    )
}

export default Producto
