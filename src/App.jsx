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
import Tecnologia from './pages/Tecnologia';
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
import BuscarProducto from './components/BuscarProducto';


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <Header />
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
          <Route path='/login' element={<Login />} />
          <Route path='/moda' element={<Moda />} />
          <Route path='/tecnologia' element={<Tecnologia />} />
          <Route path='/productos/:id' element={<ProductoDetalle />} />
          <Route path='/contenedor' element={<Contenedor/>}/>
        </Routes>

        {/*<Gallery /> */}
        <Footer />
      </div>




    </>
  )
}

export default App;


