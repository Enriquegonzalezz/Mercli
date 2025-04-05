import React from "react";
import { useLocation, useParams } from "react-router-dom";

interface Producto {
  id: string;
  imagen: string;
  nombreproducto: string;
  usertienda: string;
  valoracion: number;
  precio: number;
  descripcion?: string;
}

const ProductoDetalle: React.FC = () => {
  const { state } = useLocation();
  const { id } = useParams();

  // Si no se pasa el producto por el estado, puedes cargarlo desde un backend usando el ID
  const producto: Producto = state || {
    id: id || "",
    imagen: "",
    nombreproducto: "Producto no encontrado",
    usertienda: "",
    valoracion: 0,
    precio: 0,
    descripcion: "No hay descripción disponible.",
  };

  return (
    <div className="contenedor-detalle">
      <div className="contenedor-imagen">
        <button onClick={() => (window.location.href = "/search")}>
          <img src="../src/assets/Arrow---Down.svg" alt="Volver" style={{ color: "#000" }} />
        </button>
        <img
          src={producto.imagen}
          alt={producto.nombreproducto}
          className="imagen-principal"
        />
      </div>

      <div className="detalles">
        <div className="title">
          <h1>{producto.nombreproducto}</h1>
          <div className="rating-tienda">
            <span className="rating">
              <img src="../src/assets/stars.png" alt="Estrellas" />
              {producto.valoracion}/5
            </span>
          </div>
        </div>

        <span className="tienda">{producto.usertienda}</span>

        <p className="descripcion">{producto.descripcion}</p>

        <div className="precio-carrito">
          <span className="precio">${producto.precio.toFixed(2)}</span>
          <button className="boton-carrito" onClick={() => (window.location.href = "/search")}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;