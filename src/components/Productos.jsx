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

  const URL = 'https://fakestoreapi.com/products/';

  // 'https://691ce990d58e64bf0d34613a.mockapi.io/api/v1';
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

  return (
    <div>
      <h2>Productos en Existencia</h2>
      <div className="container">
        <div className="row">
          <ul>
            {productos.map((producto) => {
              return (
                producto.cantidad > 0 ?
                  <div className="col-12 col-md-6 col-lg-4">
                    <li key={producto.id}>
                      <p> {producto.title} : {producto.price}$ </p>
                      <img style={{ margin: "4%", borderRadius: "5px" }} src={producto.image} height={80} width={80} alt={producto.title} />
                      <button style={{ margin: "4%", borderRadius: "5px" }} onClick={() => agregarAlCarrito(producto)} > Agregar</button>
                      <ToastContainer position="top-left"
    autoClose={false} removeDelay= {1000} onClick={close}/>
                      {/* <button type="button" className="btn-primary">Primary</button> */}
                      <Link to={`/productos/${producto.id}`} > Detalles </Link>
                    </li>
                  </div>
                  : true
              )

            })}
          </ul>
        </div>
      </div>

      <Link to={`/carrito`} >
        <button className="btn btn-warning">
          <FaShoppingCart /> Carrito
        </button> </Link>
    </div>
  );
};

export default Productos;

