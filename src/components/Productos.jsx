import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext.jsx';
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Productos = ({ agregarProducto }) => {


  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const productosPorPagina = 8;
  const [paginaActual, setPaginaActual] = useState(1);

  const URL = 'https://fakestoreapi.com/products/';
  const URL2 = 'https://691ce990d58e64bf0d34613a.mockapi.io/productos';

  useEffect(() => {
    fetch(URL2)
      .then(respuesta => respuesta.json())
      .then(datos => {
        setProductos(datos);
        { console.log(datos); }
        { console.log(productos); }
        setCargando(false);
      })
      .catch((error) => {
        setError('Error al cargar productos');
        setCargando(false);
      })
  }, []);

  if (cargando) return ' Cargando productos ...';
  if (error) return error;

  /* const handleAddToCart = (producto) => {
     agregarAlCarrito(producto);
     toast.success("Producto agregado al carrito!");
 };*/

  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);

  // Cambiar de pagina
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  const handleClick = (producto) => {
    agregarAlCarrito(producto);
    toast.success(" Producto agregado con exito");
  }



  return (
    <div>
      <h2>Productos en Existencia</h2>
      <div className="container">
        <div className="row">
          <ul>
            {productosActuales.map((producto) => {
              return (
                producto.cantidad > 0 ?
                  <div className="col-12 col-md-6 col-lg-4">
                    <li key={producto.id}>
                      <p> {producto.title} : {producto.price}$ </p>
                      <img style={{ margin: "4%", borderRadius: "5px" }} src={producto.image} height={80} width={80} alt={producto.title} />
                      <button style={{ margin: "4%", borderRadius: "5px" }} onClick={() => handleClick(producto)} > Agregar</button>

                      {/* <button type="button" className="btn-primary">Primary</button> */}
                      <Link style={{ color: "yellowgreen", borderRadius: "5px" }} to={`/productos/${producto.id}`} > Detalles </Link>
                    </li>

                  </div>
                  : true
              )

            })}
          </ul>
          <ToastContainer autoClose={3000}
            duration={3000}
            position="top-left"
            removeDelay={1000}
            hideProgressBar={false}
            closeOnClick={true}
            theme="colored" />
        </div>
      </div>
      <div className="flex justify-center gap-2 my-8">
        {Array.from({ length: totalPaginas }, (_, indice) => (
          <button
            key={indice + 1}
            className={`px-3 py-1.5 rounded ${paginaActual === indice + 1
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            onClick={() => cambiarPagina(indice + 1)}
          >
            {indice + 1}
          </button>
        ))}
      </div>
      <br></br>
      <Link to={`/carrito`} >
        <button className="btn btn-warning">
          <FaShoppingCart /> Carrito
        </button> </Link>
    </div>
  );
};

export default Productos;

