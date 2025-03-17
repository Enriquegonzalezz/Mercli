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
  path?: (Path: string) => void;
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

  
  const handleComprarClick = () => {
    // Navega a la ruta /cash cuando se haga clic en el botón de comprar
    navigate("/producto");
  };

  return (
    <div className="wrapper"  key={id} onClick={handleComprarClick}>
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