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
import { Route , Routes} from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/moda' element={<Moda/>}/>
          <Route path='/tecnologia' element={<Tecnologia/>}/>
          <Route path='/productos/:id' element={<ProductoDetalle/>}/>
        </Routes>

        <Gallery />
        <Footer />
      </div>


      

    </>
  )
}

export default App;


