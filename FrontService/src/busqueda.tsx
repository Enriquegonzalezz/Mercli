import React, { useEffect, useState } from "react";
import Header from "./componentes/Header";
import Producto from "./componentes/Producto";
import Footer from "./componentes/footer";
import { useNavigate } from "react-router-dom";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('/api/product-service/products');
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        console.log("Datos recibidos de la API:", data);

        const transformedData = data.map((product: any) => ({
          id: product.id?.toString() || "", // Asegúrate de que el ID sea válido
          imagen: product.image_url || "",
          nombreproducto: product.name || "",
          usertienda: product.store || "",
          valoracion: product.rating || 0,
          precio: product.price || 0,
        }));

        setProductos(transformedData);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return <div className="cent"><div className="loader"></div></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
                  product={producto}
                  key={producto.id}
                  id={producto.id}
                  imagen={producto.imagen}
                  nombreproducto={producto.nombreproducto}
                  usertienda={producto.usertienda}
                  valoracion={producto.valoracion}
                  precio={producto.precio}
                  path={navigate}
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