import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CarritoContext from './context/CarritoContext.jsx';
import AuthContext from './context/AuthContext.jsx';
//import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext>
        <CarritoContext>
          <App />
        </CarritoContext>
      </AuthContext>
    </BrowserRouter>
  </StrictMode>,
)
