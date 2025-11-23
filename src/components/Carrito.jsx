import { useState, useEffect, useContext } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext.jsx';


const Carrito = ({ productosEnCarrito, productosEliminados }) => {

  const { carrito, eliminarDelCarrito, actualizarElCarrito, vaciarCarrito } = useContext(CarritoContext);

  return (
    <div>
      <h2>Carrito</h2>
      <div className="container">
        <div className="row">

          {carrito.map((producto, indice) => (
            <div className="col-12 col-md-6 col-lg-4">
              <div key={indice}>
                <img src={producto.image} alt={producto.title} height={80} width={80} />
                <p> {producto.title} : {producto.price}$ </p>
                <p>
                  Cantidad : {producto.cantidad}
                </p>
                <button style={{
             padding: "4px",
            textAlign: "center", color: "blue",
            margin: "2%"
        }} onClick={() => actualizarElCarrito(producto, indice)}>Restar un producto </button>
                <button style={{margin:"2%" ,padding:"4px"}} onClick={() => eliminarDelCarrito(indice)}>Eliminar el producto </button>
              </div>
            </div>
          ))}
        </div></div>
    </div>
  );
};

export default Carrito;