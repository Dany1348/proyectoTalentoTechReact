import { Helmet } from "react-helmet-async";


function Productos() {
    return (
        <>
            <Helmet>
                <title>Productos | Mi Tienda</title>
                <meta name="description" content="Explora nuestra variedad de
productos." />
            </Helmet>
            <h1>Lista de productos</h1>
        </>
    );
}