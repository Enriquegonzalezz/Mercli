import React from "react";
import "./ingresos.css"

interface Props {
    numero: number
}


const Ingresos: React.FC<Props> = ({numero}) => {
    return (
        <div className="container">
            <nav className="ing">
                <p className="tex-par">Ingresos</p>
            </nav>
            <nav className="num">
                <p className="numero">${numero}</p>
            </nav>
            <div className="chart-container">  <div className="chart">  
                    <div className="barmes">
                        <div className="bar"></div>
                        <div className="barchi"></div>
                    </div>
                    <div className="barmes">
                        <div className="bar"></div>
                        <div className="barchi"></div>
                    </div>
                    <div className="barmes">
                        <div className="bar"></div>
                        <div className="barchi"></div>
                    </div>
                    <div className="barmes">
                        <div className="bar"></div>
                        <div className="barchi"></div>
                    </div>
                    <div className="barmes">
                        <div className="bar"></div>
                        <div className="barchi"></div>
                    </div>
                    <div className="barmes">
                        <div className="bar"></div>
                        <div className="barchi"></div>
                    </div>
            </div>
        </div>
        <div className="meses">
            <p>Ene</p>
            <p>Feb</p>
            <p>Mar</p>
            <p>Abr</p>
            <p>May</p>
            <p>Jun</p>
        </div>
    </div>
    )
}

export default Ingresos