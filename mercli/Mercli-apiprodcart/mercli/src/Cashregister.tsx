import Footer from "./componentes/footer"
import Header from "./componentes/Header"
import "./index.css"
import Ingresos from "./componentes/ingresos"
import billete from "./assets/billete.svg"
import tarjeta from "./assets/tarjeta.svg"
import x from "./assets/x.svg"
import cas from "./assets/cashrregisterblack.svg"
import wallet from "./assets/wallet.svg"
import coin from "./assets/coin.svg"


function Cash(){
    return (
        <>
        <div className="wrapper-register">
            <header> <Header /></header>
            <main className="extensible">
            <Ingresos numero={12583} />
            <div className="congrid">
                <div className="pagos">
                    <p>Pague en efectivo</p>
                    <img src={billete} alt="" />
                </div>
                <div className="pagos">
                    <p> Pague por Punto</p>
                    <img src={tarjeta} alt="" />
                </div>
                <div className="pagos">
                    <p>Anular</p>
                    <img src={x} alt="" />
                </div>
                <div className="pagos">
                    <p>Cerrar caja</p>
                    <img src={cas} alt="" />
                </div>
                <div className="pagos">
                    <p>Todas las transf.</p>
                    <img src={wallet} alt="" />
                </div>
                <div className="pagos">
                    <p>Vuelto</p>
                    <img src={coin} alt="" />
                </div>
            </div>
            </main>
            <footer><Footer /></footer>
        </div>
        </>
    )
}

export default Cash