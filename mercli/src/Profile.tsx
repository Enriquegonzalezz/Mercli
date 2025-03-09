import React, { useEffect, useState } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/footer";
import Producto from "./componentes/Producto";

interface ProductoData {
  id: string;
  imagen: string;
  nombreproducto: string;
  usertienda: string;
  valoracion: number;
  precio: number;
}

const Profile: React.FC = () => {
  const [productos, setProductos] = useState<ProductoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simula una llamada a la API
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:8081/products", {
          method:"GET",
          mode:"no-cors"
        }); 
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        console.log("Datos recibidos de la API:", data); // <-- Aquí
        setProductos(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error); // <-- Aquí
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="wrapper-register">
        <header><Header /></header>
        <main>
          <div className="textotienda">
            <p>Ecommerce de ecoshopiy</p>
          </div>
          <div className="contenedortienda">
            <div className="congrid2">
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
        <footer><Footer /></footer>
      </div>
    </>
  );
};

export default Profile;