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
            </ul>
        </nav>
    );
}
export default Nav;