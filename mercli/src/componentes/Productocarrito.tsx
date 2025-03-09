import React from 'react';
import './productocarrito.css';

interface Props {
    foto: string,
    nombre: string,
}

const Productocarrito: React.FC<Props> = ({ foto, nombre }) => {
    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={foto} alt={nombre} />
            </div>
            <div className='product-info'>
                <h4>{nombre}</h4>
                {/* Puedes añadir más información aquí */}
            </div>
        </div>
    );
};

export default Productocarrito;
