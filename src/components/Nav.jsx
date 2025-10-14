import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav style={{
            backgroundColor: "#333", color: "white", padding:
                "10px"
        }}>
            <ul style={{
                listStyle: "none", display: "flex",
                justifyContent: "space-around", margin: 0
            }}>
                <li><a href="/" style={{
                    color: "yellow",
                    textDecoration: "none"
                }}>Inicio</a></li>
                <li><a href="/moda" style={{
                    color: "yellow",
                    textDecoration: "none"
                }}>Moda</a></li>
                <li>
                    <Link to={'/tecnologia'} style={{
                    color: "yellow",
                    textDecoration: "none"
                }}> Tecnologia </Link>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;