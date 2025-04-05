import React from "react";

import "./productoencarro.css"
interface Props{
    nombre: string,
    Numero: number,
    foto: string,
    items:number
}

const Productoencarro: React.FC<Props> = ({nombre, Numero, items, foto}) => {
    return (
        <div className="card">
            <div className="te">
                <nav className="medio">
                    <img className= "clas"src={foto} alt="" />
                </nav>
                <nav className="medio">
                    <p>{nombre}</p>
                    <div className="flex">
                        <button>-</button>
                        <p>{items}</p>
                        <button>+</button>
                    </div>
                </nav>

                <nav className="po">
                    <p>${Numero}</p>
                </nav>
            </div>
        </div>
    )
}

export default Productoencarro;