import { useState , useEffect } from "react";
import React from 'react';
import {Link} from 'react-router-dom';

const Productos = ({agregarProducto})=>{

    
    const [productos, setProductos] = useState([])
    const [cargando , setCargando] = useState(true);
    const [error , setError]= useState(null);

    const URL = 'https://fakestoreapi.com/products/';

      useEffect(() => {
    fetch(URL)
      .then(respuesta => respuesta.json())
      .then( datos => { setProductos(datos);
        {console.log(datos);}
        {console.log(productos);}
        setCargando(false);
      })
      .catch((error) => {
        setError('Error al cargar productos');
        setCargando(false);
      })
  },[]);

    if(cargando) return ' Cargando productos ...';
    if(error) return error;
    
    return(
        <div>
            <h2>Productos</h2>
            <ul>   
                {productos.map( (producto) => {
                  return(
                      <li key={producto.id}>
                       <p> {producto.title} : {producto.price}$ </p>
                        <img src={producto.image} height={80} width={80} alt={producto.title} />
                        <button onClick={()=> agregarProducto(producto)} > Agregar</button>
                        <Link  to={`/productos/${producto.id}`} > Detalles </Link>
                    </li>
                  )
                    
                })}
            </ul>
        </div>
    );
};

export default Productos;

