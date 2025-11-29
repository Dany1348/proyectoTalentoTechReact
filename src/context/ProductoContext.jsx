import { createContext, useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const ProductoContext = createContext();

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const URL2 = 'https://691ce990d58e64bf0d34613a.mockapi.io/productos';

  // Cargar productos al montar el componente
  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      setCargando(true);
      setError(null);

      const respuesta = await fetch(URL2);

      if (!respuesta.ok)
        throw new Error(`Error HTTP: ${respuesta.status}`);

      const datos = await respuesta.json();
      setProductos(datos);

    } catch (error) {
      console.error("Error al cargar productos:", error);
      setError(error.message || "Error al cargar los productos");

    } finally {
      setCargando(false);
    }
  };

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
    //toast.success("Producto agregado al carrito!");
  };

  const editarProducto = (productoActualizado) => {
    setProductos(
      productos.map((producto) =>
        producto.id === productoActualizado.id ? productoActualizado : producto
      )
    );
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <ProductoContext.Provider
      value={{
        productos, agregarProducto, editarProducto, eliminarProducto,
        cargando,
        error,
        cargarProductos
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};

export const useProductosContext = () => useContext(ProductoContext);

export default ProductoProvider;