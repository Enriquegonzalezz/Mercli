import React from "react";
import "./Prodcuto.css";
import estrellita from "../assets/Star - Iconly Pro.svg";
import { useNavigate } from "react-router-dom";

interface Propsdelproducto {
  product?: any;
  id: string; // ID del producto
  imagen: string;
  nombreproducto: string;
  usertienda: string;
  valoracion: number;
  precio: number;
  path?: (Path: string) => void;
}

const Producto: React.FC<Propsdelproducto> = ({
  product,
  id,
  imagen,
  nombreproducto,
  usertienda,
  valoracion,
  precio,
  
}) => {
  const navigate = useNavigate();

  return (
    <div className="wrapper"  key={id} onClick={() => navigate(`/producto/${id}`, { state: product })}>
      <img className="img" src={imagen} alt={nombreproducto} />
      <div className="info">
        <nav className="fle">
          <p>{nombreproducto}</p>
            <p>${precio.toFixed(2)}</p>
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