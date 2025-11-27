import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const handleAddToCart = () => {
    toast.success("Producto agregado al carrito!");
};


return (
    <>
        <button className="btn btn-success" onClick={handleAddToCart}>
            Agregar al carrito
        </button>
        <ToastContainer />
    </>
);
function App() {
  return (
 <div className="layout-nad">
        <Header />
      <main className="main-nad">
        <div className="container-nad">
        <ToastContainer
          position="top-right"
          autoClose={1800}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          theme="colored"

          toastStyle={{
            background: "#4E342E",
            color: "#FFF",
            fontFamily: "Poppins, sans-serif",
            borderRadius: "10px",
            border: "1px solid #6D4C41",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.25)"
          }}

          progressStyle={{
            background: "#FFCC80"
          }}
        />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path='/productos/:id' element={<ProductoDetalle />}/>
        <Route path="/gracias" element={<Gracias />} />
        <Route path="/carrito" element={
                <RutaProtegida >
                  <Carrito />
                </RutaProtegida>}/>
        <Route path="/admin" element={
                <RutaProtegida >
                  <Admin />
                </RutaProtegida>}/>
      </Routes>
        </div>
      </main>

      <Footer />

    </div>
  );
}
export default App