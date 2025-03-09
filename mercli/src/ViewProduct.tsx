import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./componentes/footer";

interface Producto {
  id: string;
  imagen: string;
  nombreproducto: string;
  usertienda: string;
  valoracion: number;
  precio: number;
  descripcion?: string; // Prop adicional que podría devolver la API
}

const ProductoDetalle = () => {
  const { id } = useParams(); // Obtén el ID del producto desde la URL
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
  //la
    const fetchProducto = async () => {
      try {
        const response = await fetch(`https://api.ejemplo.com/productos/${id}`);
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error("Error fetching producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) {
    return  <div className="loader"></div>;
  }

  return (
    <>
    <div className="contenedorproducto">
        <img className="arrowback" src="../src/assets/Arrow---Down.svg" alt="" />
        <img className="" src={producto.imagen} alt={producto.nombreproducto} />
    </div>
    <div className="infovieprodu">
        <div className="nameandvalue">
            <h1>{producto.nombreproducto}</h1>
            <p><img src="../src/assets/stars.png" alt="" />{producto.valoracion}/5</p>
        </div>
        <div className="tienda">{producto.usertienda}</div>
        <div className="infodescri">{producto.descripcion}</div>
        <div className="priceandcar">
            <p>Precio: ${producto.precio}</p>
            <button className="carbutton">Agregar al carrito</button>
        </div>
        <Footer/>
    </div>
    </>
  );
};

export default ProductoDetalle;