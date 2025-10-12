import React from 'react';
import Nav from './Nav';

function Header() {
    return (
        <header style={{
            backgroundColor: "#4CAF50", padding: "10px",
            textAlign: "center", color: "white"
        }}>
            <h1>Bienvenidos a mi App React</h1>
            <Nav></Nav>
        </header>
    );
}
export default Header;