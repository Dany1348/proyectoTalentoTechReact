import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
//import AuthContext from '../context/AuthContext';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { HiEmojiHappy } from "react-icons/hi";

function Nav() {
    const [logueado, setLogueado] = useState(null);
    const { usuario , logout} = useAuthContext();
    console.log( "Esto trae el usuario desde el context   ", usuario );
    
   // setLogueado(usuario);


    return (
        <nav style={{
            backgroundColor: "blue", color: "white", padding:
                "10px"
        }}>
            <ul style={{
                listStyle: "none", display: "flex",
                justifyContent: "space-around", margin: 0
            }}>
                <li>
                    <Link to={'/'} style={{
                        color: "yellow",
                        textDecoration: "none"
                    }}> Inicio </Link></li>

                <li>
                    <Link to={'/moda'} style={{
                        color: "yellow",
                        textDecoration: "none"
                    }}> Moda </Link>
                </li>

                <li>
                    <Link to={'/tecnologia'} style={{
                        color: "yellow",
                        textDecoration: "none"
                    }}> Tecnologia </Link>
                </li>
                <li>
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
                        }}> <HiEmojiHappy   style={{
                            color: "yellow",
                            marginRight: "10px",
                            fontSize: "2.0em",
                            textDecoration: "none"
                        }}/>{usuario}</span>
                        <Link to={'/login'} style={{
                            color: "yellow",
                            textDecoration: "none",
                            borderRadius:" 50px"
                        }}>
                            <button style={{borderRadius:" 10px"}} onClick={logout}>Logout </button>  </Link>
                        </>    
                    }
                </li>

                <li>
                    <Link to={`/carrito`} >
                        <button className="btn btn-warning ">
                            <FaShoppingCart /> Carrito
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;