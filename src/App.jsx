import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Productos from './components/Productos';
import Inicio from './pages/Inicio';
import Moda from './pages/Moda';
//import Tecnologia from './pages/Tecnologia';
import Tecnologia from './pages/Technology';
import ProductoDetalle from './pages/ProductoDetalle';
import { Route, Routes } from 'react-router-dom';
import Carrito from './components/Carrito';
import Login from './pages/Login';
import HomeAdmin from './pages/HomeAdmin';
import RutaProtegidaC from './components/RutaProtegidaC';
import EditarProducto from './components/EditarProducto';
import GestionProductos from './components/GestionProductos';
import Contenedor from './bootstrap/Contenedor';
import RutaProtegidaA from './components/RutaProtegidaA';
import RutaProtegidaL from './components/RutaProtegidaL';
import BuscarProducto from './components/BuscarProducto';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Busqueda from './components/Busqueda';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <Header />
        {/*<ToastContainer
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
        /> */}
        <Routes>
          <Route path='/' element={<Inicio />} />
          {/*<Route path='/admin' element={<HomeAdmin />} /> */}
          <Route path='/admin' element={
            <RutaProtegidaA>
              <HomeAdmin />
            </RutaProtegidaA>
          } />
          <Route path='/productos' element={<Productos />} />
          <Route path='/productos/find' element={<BuscarProducto />} />
          {/*<Route path='/gestionproductos' element={<GestionProductos />} /> */}
          <Route path='/gestionproductos' element={
            <RutaProtegidaA>
              <GestionProductos />
            </RutaProtegidaA>
          } />

          {/* <Route path='/carrito' element={<Carrito />} /> */}
          <Route path='/carrito' element={
            <RutaProtegidaC>
              <Carrito />
            </RutaProtegidaC>
          } />
          {/*<Route path='/login' element={<Login />} /> */}
          <Route path='/login' element={
            <RutaProtegidaL>
              <Login />
            </RutaProtegidaL>
          } />
          <Route path='/moda' element={<Moda />} />
          <Route path='/tecnologia' element={<Tecnologia />} />
          <Route path='/busqueda' element={<Busqueda />} />

          <Route path='/productos/:id' element={<ProductoDetalle />} />
          <Route path='/contenedor' element={<Contenedor />} />
        </Routes>

        {/*<Gallery /> */}
        <Footer />
      </div>




    </>
  )
}

export default App;


