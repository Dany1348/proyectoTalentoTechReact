import React from 'react';
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
                    color: "white",
                    textDecoration: "none"
                }}>Inicio</a></li>
                <li><a href="/moda" style={{
                    color: "white",
                    textDecoration: "none"
                }}>Moda</a></li><li><a href="/productos/13" style={{
                    color: "white",
                    textDecoration: "none"
                }}>ProductoDetalle</a></li>
            </ul>
        </nav>
    );
}
export default Nav;