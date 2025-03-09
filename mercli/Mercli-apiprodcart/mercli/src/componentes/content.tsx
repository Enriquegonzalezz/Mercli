import './content.css'

import buysvg from "../assets/buy.svg"
import kiketo from "../assets/fotish.jpg"
import { useNavigate } from 'react-router-dom'
import Productocarrito from './Productocarrito'

const SearchBar = () => { 
    const navigate = useNavigate(); 
    const handleSearchFocus = () => {
         navigate('/search'); 
        }; 
        return (
            <input type="text" placeholder="Search" onFocus={handleSearchFocus} /> 
        ); 
};



function Content(){
    return (
        <div className='content'>
            <div className="consumidores">
            <div className="glass">
            </div>
                <div className="circulo1"></div>
                <div className="circulo2"></div>
                
                <div className='info-content'>
                        <header className='title'>Consumidores</header>
                        <main className='maintitle'>1553</main>
                        <footer className='footertitle'>Nuevos consumidores en los ultimos 30 dias</footer>
                    </div>
            </div>
            <div>
                <div className="search-bar">
                    <input type="text" placeholder='Search' onFocus={SearchBar}/>
                </div>
            </div>
            <div className='info-premiun'>
                <nav className='nav1'>
                    <p className='get'> Consigue</p>
                    <p className='second'> <p className="todo">TODO</p> lo que quieras</p>
                    <p>a un solo <strong>click</strong> </p>
                </nav>
                <nav>
                    <img src={buysvg} alt=''/>
                </nav>
            </div>
            <div className='products'>
                <h3 className='azulito'>Seguir comprando</h3>
                <div className='carrusel'>
                   <Productocarrito foto={kiketo} nombre='nombre del producto' />
                   <Productocarrito foto={kiketo} nombre='nombre del producto' />
                   <Productocarrito foto={kiketo} nombre='nombre del producto' />
                </div>
            </div>
        </div>

    )
}

export default Content