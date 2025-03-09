import React, { useEffect, useState } from "react";
import Header from "./componentes/Header";
import Producto from "./componentes/Producto";
import Footer from "./componentes/footer";

// Define el tipo ProductoData
interface ProductoData {
  id: string;
  imagen: string;
  nombreproducto: string;
  usertienda: string;
  valoracion: number;
  precio: number;
}

const Busqueda: React.FC = () => {
  const [productos, setProductos] = useState<ProductoData[]>([]);

  // Simula la obtención de productos desde la API
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/productos"); // Cambia la URL por la de tu API
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error fetching productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="wrapper-register">
      <Header />
      <main className="contenedor-busqueda">
        <div className="centrador">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="prgrid">
            {productos.map((producto) => (
              <Producto
                key={producto.id} // Usa el id como key
                id={producto.id}
                imagen={producto.imagen}
                nombreproducto={producto.nombreproducto}
                usertienda={producto.usertienda}
                valoracion={producto.valoracion}
                precio={producto.precio}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Busqueda;