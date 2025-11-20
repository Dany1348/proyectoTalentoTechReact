import { useState , useEffect ,useContext } from "react";
import React from 'react';
import {Link} from 'react-router-dom';
import {CarritoContext} from '../context/CarritoContext.jsx';


const Carrito = ({ productosEnCarrito, productosEliminados }) => {

  const {carrito , eliminarDelCarrito, vaciarCarrito} = useContext(CarritoContext);

  return (
    <div>
      <h2>Carrito</h2>
      {carrito.map((producto, indice) => (
        <div key={indice}>
          <img src={producto.image} alt={producto.title} height={80} width={80} />
          <p> {producto.title} : {producto.price}$ </p>
          <button onClick={() => eliminarDelCarrito(indice)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Carrito;