import { useSearch } from "../context/BusquedaContext";
import { useProductosContext } from "../context/ProductoContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Busqueda = () => {
  // usamos los contextos de busqueda y productos.
  const { busqueda } = useSearch();
  const { productos } = useProductosContext();

  console.log("Estos son los productos que llegan   " , productos);
  
  const productosFiltrados = productos.filter((producto) =>
    producto.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Productos Filtrados 
      </h2>
      <div className="row">
      {/*<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> */}
          {productosFiltrados.length > 0 ? (
            <>
              {productosFiltrados.map((producto) => (
                
                producto.cantidad > 0 ?
                  <div className="col-12 col-md-6 col-lg-4">
                    <li key={producto.id}>
                      <p> {producto.title} : {producto.price}$ </p>
                      <img style={{ margin: "4%", borderRadius: "5px" }} src={producto.image} height={80} width={80} alt={producto.title} />
                      <button style={{ margin: "4%", borderRadius: "5px" }} onClick={() => agregarAlCarrito(producto)} > Agregar</button>
                      <ToastContainer position="top-left"
                        removeDelay={1000}
                        autoClose={1800}
                        hideProgressBar={false}
                        closeOnClick={true}
                        pauseOnHover
                        theme="colored"
                      />
                      {/* <button type="button" className="btn-primary">Primary</button> */}
                      <Link style={{ color: "yellowgreen", borderRadius: "5px" }} to={`/productos/${producto.id}`} > Detalles </Link>
                    </li>
                  </div>
                  : true 
              ))}
            </>
          ) : (
            <p>No hay productos que coincidan con la búsqueda.</p>
          )}
      </div>
      </div>
   
  );
};

export default Busqueda;


{/*<div className="col-12 col-md-6 col-lg-4">

                
                <div key={producto.id} className="group relative">
                  <img
                    alt={producto.title}
                    src={producto.image}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to={`/productos/${producto.id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {producto.title}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${producto.price}
                    </p>
                  </div>
                </div>
                </div> */} 