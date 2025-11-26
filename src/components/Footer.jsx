import React from 'react';
import Twiter from '../img/Twiter.jpg'
function Footer() {
    return (
        <footer style={{
            backgroundColor: "#e43cf4ff", padding: "10px",
            textAlign: "center", marginTop: "20px" ,color:"blue",
            paddingTop:"160px",
            height: "260px" , fontSize: "15px",
            backgroundImage: "url(../../src/img/greenforest.png)"
        }}>
            <div verticalAlign="center" class="redesSociales">
                <img class="RSocial" src="../../src/img/Fcabook.png" alt="Facebook"></img>
                <img class="RSocial" src="../../src/img/Instagrampng.png" alt="Instagram"></img>
                <img class="RSocial" src="../../src/img/Twiter.jpg" alt="Twitter"></img>
                <img class="RSocial" src="../../src/img/Tik tok1.png" alt="TikTok"></img>
                <p style={{color:"blue", backgroundColor:"aquamarine"}}>&copy; 2025 - Mi Aplicación React</p>
            </div>
            
        </footer>
    );
} export default Footer;
























/*import React from 'react';
function Footer() {
    return (
        <footer style={{
            backgroundColor: "#f1f1f1", padding: "10px",
            textAlign: "center", marginTop: "20px" ,color:"blue"
        }}>
            <p>&copy; 2024 - Mi Aplicación React</p>
        </footer>
    );
} export default Footer;*/