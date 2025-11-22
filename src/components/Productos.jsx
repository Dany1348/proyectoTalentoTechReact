import { useState, useEffect, useContext } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext.jsx';


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

  return (
    <div>
      <h2>Productos</h2>
      <div className="container">
        <div className="row">
          <ul>
            {productos.map((producto) => {
              return (
                producto.cantidad > 0 ?
                <div className="col-12 col-md-6 col-lg-4">
                  <li key={producto.id}>
                    <p> {producto.title} : {producto.price}$ </p>
                    <img src={producto.image} height={80} width={80} alt={producto.title} />
                    <button style={{margin:"4%" , borderRadius: "5px"}} onClick={() => agregarAlCarrito(producto)} > Agregar</button>

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

      <Link to={`/carrito`} > Ir al carrito </Link>
    </div>
  );
};

export default Productos;

