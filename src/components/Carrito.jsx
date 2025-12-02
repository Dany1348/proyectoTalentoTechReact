import { useState, useEffect, useContext } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext.jsx';
import styled from "styled-components";
import BotonStyled from '../bootstrap/BotonCompra.jsx';



const Carrito = ({ productosEnCarrito, productosEliminados }) => {

  const { carrito, eliminarDelCarrito, actualizarElCarrito, vaciarCarrito } = useContext(CarritoContext);

  const ejecutarCompra = () => {
    
    if (carrito.length == 0) {
      alert("Todavia no hay nada agregado al carrito de compra !!!")
    } else {
      var total = 0;
      carrito.map(producto => {
        total = total + (producto.cantidad * producto.price); 
      })
      console.log(" Esto se acumula en total  " , total);
      alert(`Felicitaciones por su compra de $  : ${total}`);
      vaciarCarrito();
    };

  }

  return (
    <div>
      <h2>Carrito</h2>
      <div>
        {carrito.length == 0 ? <p> Todavia no hay nada agregado al carrito </p>
          : <></>}
        {console.log("Esto tiene el carrito", carrito)}

      </div>

      <div className="container">
        <div className="row">

          {carrito.map((producto, indice) => (
            <div className="col-12 col-md-6 col-lg-4">
              <div key={indice}>
                <img style={{ margin: "4%", borderRadius: "5px" }} src={producto.image} alt={producto.title} height={80} width={80} />
                <p> {producto.title} : {producto.price}$ </p>
                <p>
                  Cantidad : {producto.cantidad}
                </p>
                <button style={{
                  padding: "4px",
                  textAlign: "center", color: "blue",
                  margin: "2%"
                }} onClick={() => actualizarElCarrito(producto, indice)}>Restar un producto </button>
                <button style={{ margin: "2%", padding: "4px" }} onClick={() => eliminarDelCarrito(indice)}>Eliminar el producto </button>
              </div>
            </div>
          ))}
        </div>
        {carrito.length > 0 ? <button className="btn btn-success " style={{ marginRight: '4em' }} onClick={() => vaciarCarrito()}>
          Vaciar Carrito
        </button> : <></>}

        <BotonStyled alComprar={ejecutarCompra} variant="btn-success">Comprar</BotonStyled>
      </div>

    </div>

  );
};

export default Carrito;