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


  // Simula la obtención de productos desde la API
  
  
    useEffect(() => {
      // Simula una llamada a la API con los datos del JSOn
  
      const fetchProductos = async () => {
        let data = [];
        try {
          const response = await fetch(`/api/product-service/products`); 
          if (!response.ok) {
            throw new Error("Error al obtener los productos");
          }
          data = await response.json();
        } catch (error) {
          console.error(error);
        }
        try {
          // Datos simulados del JSON
          const products = data;
  
        // Transformar los datos al formato de ProductoData
        const transformedData = products.map((product: any) => ({
          id: product.ID.toString(), // Convertir el ID a string
          imagen: product.ImageURL,
          nombreproducto: product.Name,
          usertienda: product.Store,
          valoracion: product.Rating,
          precio: product.Price,
        }));
  
        // Simula un retraso de la API
        await new Promise((resolve) => setTimeout(resolve, 1000));
  
        console.log("Datos transformados:", transformedData); // <-- Aquí
        setProductos(transformedData);
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
    return  <div className="cent"><div className="loader"></div></div>;
  }
  
  if (error) {
    return <div>error</div>;
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
                key={producto.id} // Usa el id como key
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