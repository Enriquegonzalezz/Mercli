import React from "react";
import "./Prodcuto.css";
import estrellita from "../assets/Star - Iconly Pro.svg";
import { useNavigate } from "react-router-dom";

interface Propsdelproducto {
  id: string; // ID del producto
  imagen: string;
  nombreproducto: string;
  usertienda: string;
  valoracion: number;
  precio: number;
}

const Producto: React.FC<Propsdelproducto> = ({
  id,
  imagen,
  nombreproducto,
  usertienda,
  valoracion,
  precio,
}) => {
  const navigate = useNavigate();

  
  const handleClick = () => {
    navigate(`/producto/${id}`); 
  };

  return (
    <div className="wrapper" onClick={handleClick} key={id}>
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
          <p className="flexi">
            <img src={estrellita} alt="" />
            {valoracion.toFixed(1)}
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Producto;