import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CarritoContext from './context/CarritoContext.jsx';
import AuthContext from './context/AuthContext.jsx';
import {ProductoProvider} from './context/ProductoContext.jsx'
//import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext>
        <ProductoProvider>
          <CarritoContext>
            <App />
          </CarritoContext>
        </ProductoProvider>
      </AuthContext>
    </BrowserRouter>
  </StrictMode>,
)
