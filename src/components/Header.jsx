import React from 'react';
import Nav from './Nav';
import NavBar from './NavbarToggle';
//import tigre from '../../public/tiger-feline-animal-image-pixabay-16.png'

function Header() {
    return (
        <header style={{
            backgroundColor: "#4CAF50", padding: "10px",
            textAlign: "center", color: "blue",
            
        }}>
            <h1>
                {/* <img src="../src/img/tiger-feline-animal-image-pixabay-16.png" title="Logo de Tiger" id="Logo" width="6%"  alt="img tigre"/>                          
                */}
                 <img src="/tiger-feline-animal-image-pixabay-16.png" title="Logo de Tiger" id="Logo" width="6%"  alt="img tigre"/>                          
               
                Tienda Talento Tech React </h1>
            <Nav></Nav>
            <NavBar></NavBar>
        </header>
    );
}
export default Header;