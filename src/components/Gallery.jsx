import React from 'react';
import imagen2 from '../img/gatito2.jpg';
import imagen1 from '../img/gatito1.webp';
import imagen3 from "../img/gatito3.jpg";

function Gallery() {
    const images = [
       // "https://via.placeholder.com/150",
       // "https://via.placeholder.com/150/0000FF",
       // "https://via.placeholder.com/150/FF0000",
       //{imagen2},
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUC0CtwbAvE7XEzww2y8A5vBKYZVwu0tWvmHRwEw73aQRBtfosg9SHPGAxohtVe1NF72A&usqp=CAU",
        'https://img.buzzfeed.com/buzzfeed-static/static/2025-03/13/18/subbuzz/UjLcjUoUE0.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto'
    ];
    return (
        <section style={{
            display: "flex", gap: "10px", justifyContent:
                "center", marginTop: "20px"
        }}>
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Imagen ${index + 1}`}
                    style={{ width: "auto", height: "150px" }} />
            ))}
            <img src={imagen1} alt={`Imagen 10`}
                style={{ width: "auto", height: "150px" }} />
            <img src={imagen2} alt={`Imagen 10`}
                style={{ width: "auto", height: "150px" }} />
                <img src={imagen3} alt={`Imagen 10`}
                    style={{ width: "auto", height: "150px" }} />
        </section>
    );
}
export default Gallery;