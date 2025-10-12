import { useState } from "react";
import Productos from "../components/Productos";
import Carrito from "../components/Carrito";

const Inicio = () => {
    const [carrito , setCarrito] = useState (["algo" , "algo mas"]);

    const agregarAlCarrito = (producto) =>{
        setCarrito([...carrito, producto]);
    };

    const eliminarDelCarrito =(indiceAEliminar) => {
        setCarrito(carrito.filter((_, indice) => indice != indiceAEliminar))
    };

    return(
        <>
        <Productos agregarProducto={agregarAlCarrito}/>
        <hr />
        <Carrito
        productosEnCarrito={carrito}
        productosEliminados={eliminarDelCarrito}
        />
        </>
    );
};

export default Inicio;
