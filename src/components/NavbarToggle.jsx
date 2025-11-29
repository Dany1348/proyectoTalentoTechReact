import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
//import AuthContext from '../context/AuthContext';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { HiEmojiHappy } from "react-icons/hi";
import BarraBusqueda from './BarraBusqueda';

function NavBar() {
  const [logueado, setLogueado] = useState(null);
  const { usuario, logout } = useAuthContext();
  console.log("Esto trae el usuario desde el context   ", usuario);


  return (

    <nav className="navbar navbar-expand-md navbar-expand-lg bg-body-tertiary" style={{
      backgroundColor: "", color: "magenta", padding:
        "5px", top: "0"
    }} >
      <div style={{
        background: "linear-gradient(to right,rgba(43, 2, 137, 1), blue,  magenta)", color: "magenta", padding:
          "10px"
      }} className="container-fluid">
        {/*<a style={{
            backgroundColor: "blue", color: "white", padding:
                "10px"
        }} className="navbar-brand" href="/">Navbar</a> */}
        <Link to={'/'} style={{
          color: "yellow",
          textDecoration: "none"
        }}> Inicio </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                                <Link to={'/moda'} style={{
                                    color: "yellow",
                                    textDecoration: "none"
                                }}> Moda </Link>
                            </li>
            <li className="nav-item">
              {/*<a style={{
            backgroundColor: "blue", color: "white", padding:
                "10px"
        }} className="nav-link active" aria-current="page" href="#">Home</a> */}
              <Link to={'/tecnologia'} style={{
                color: "yellow",
                textDecoration: "none"
              }}> Tecnologia </Link>
            </li>
            <li className="nav-item">
              {/*<a style={{
            backgroundColor: "blue", color: "white", padding:
                "10px"
        }} className="nav-link" href="#">Link</a> */}

              {usuario == null ?
                <Link to={'/login'} style={{
                  color: "yellow",
                  textDecoration: "none"
                }}> Login </Link> :
                <>
                  <span style={{
                    color: "yellow",
                    marginRight: "20px",
                    textDecoration: "none"
                  }}> <HiEmojiHappy style={{
                    color: "yellow",
                    marginRight: "10px",
                    fontSize: "2.0em",
                    textDecoration: "none"
                  }} />{usuario}</span>
                  <Link to={'/login'} style={{
                    color: "yellow",
                    textDecoration: "none",
                    borderRadius: " 50px"
                  }}>
                    <button style={{ borderRadius: " 10px" }} onClick={logout}>Logout </button>  </Link>
                </>
              }
            </li>
            <li className="nav-item">
              <Link to={`/carrito`} >
                <button className="btn btn-warning ">
                  <FaShoppingCart /> Carrito
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          {/*<form className="d-flex" role="search">
            <input style={{
              backgroundColor: "rgb(32, 196, 142)", color: "white", padding:
                "10px"
            }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
      <BarraBusqueda></BarraBusqueda>
        </div>
      </div>
    </nav>

  );
}
export default NavBar;